import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const MAX_SIZE = 120 * 1024; // 120 KB
const IGNORE_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', 'out', 'public/build']);
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg']);
const CODE_EXTS = new Set(['.html', '.css', '.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.vue', '.svelte']);

async function getFiles(dir) {
    const files = [];
    async function scan(currentDir) {
        const entries = await fs.readdir(currentDir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
                if (!IGNORE_DIRS.has(entry.name)) {
                    await scan(fullPath);
                }
            } else {
                files.push(fullPath);
            }
        }
    }
    await scan(dir);
    return files;
}

async function optimizeImage(inputPath, outputPath) {
    let quality = 80;
    let scale = 1.0;
    
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const originalWidth = metadata.width;

    while (true) {
        const resizeOptions = originalWidth ? { width: Math.round(originalWidth * scale) } : undefined;
        
        let sharpInstance = sharp(inputPath);
        if (resizeOptions) {
            sharpInstance = sharpInstance.resize(resizeOptions);
        }
        
        const buffer = await sharpInstance
            .webp({ quality })
            .toBuffer();
        
        if (buffer.length <= MAX_SIZE || (quality <= 20 && scale <= 0.5)) {
            await fs.writeFile(outputPath, buffer);
            return {
                size: buffer.length,
                quality,
                scale
            };
        }

        // Drop quality first, then scale if quality is already low
        if (quality > 20) {
            quality -= 10;
        } else {
            scale -= 0.1;
        }
    }
}

async function run() {
    const rootDir = process.cwd();
    console.log(`\n🚀 Starting Image Optimization in: ${rootDir}\n`);
    
    const allFiles = await getFiles(rootDir);
    const images = allFiles.filter(f => IMAGE_EXTS.has(path.extname(f).toLowerCase()));
    const codeFiles = allFiles.filter(f => CODE_EXTS.has(path.extname(f).toLowerCase()));
    
    if (images.length === 0) {
        console.log("No .jpg, .jpeg, or .png images found to optimize.");
        return;
    }

    console.log(`Found ${images.length} images and ${codeFiles.length} code files.\n`);

    const replacements = [];

    // 1. Convert and compress images
    console.log('🔄 Converting and compressing images...');
    for (const imagePath of images) {
        const ext = path.extname(imagePath);
        const dirname = path.dirname(imagePath);
        const basename = path.basename(imagePath, ext);
        const newPath = path.join(dirname, basename + '.webp');
        
        try {
            const result = await optimizeImage(imagePath, newPath);
            const sizeKb = (result.size / 1024).toFixed(2);
            console.log(`  ✅ Optimized: ${path.basename(imagePath)} -> ${basename}.webp (${sizeKb} KB, q:${result.quality}, scale:${result.scale.toFixed(1)})`);
            
            replacements.push({
                oldName: path.basename(imagePath),
                newName: basename + '.webp',
                oldPath: imagePath
            });
        } catch (e) {
            console.error(`  ❌ Failed to optimize ${imagePath}:`, e.message);
        }
    }

    if (replacements.length === 0) {
        console.log("\nNo images were successfully converted. Exiting.");
        return;
    }

    // Sort replacements by length descending to prevent partial match bugs
    // e.g. 'dark-logo.png' is processed before 'logo.png'
    replacements.sort((a, b) => b.oldName.length - a.oldName.length);

    // 2. Update code references
    console.log('\n📝 Updating code references...');
    let filesUpdatedCount = 0;
    for (const codeFile of codeFiles) {
        try {
            let content = await fs.readFile(codeFile, 'utf8');
            let modified = false;
            
            for (const rep of replacements) {
                if (content.includes(rep.oldName)) {
                    content = content.split(rep.oldName).join(rep.newName);
                    modified = true;
                }
            }
            
            if (modified) {
                await fs.writeFile(codeFile, content, 'utf8');
                console.log(`  📝 Updated: ${path.relative(rootDir, codeFile)}`);
                filesUpdatedCount++;
            }
        } catch (e) {
            console.error(`  ❌ Failed to update ${codeFile}:`, e.message);
        }
    }
    
    console.log(`  -> Updated references in ${filesUpdatedCount} files.`);

    // 3. Clean up original files
    console.log('\n🗑️ Cleaning up original images...');
    let deletedCount = 0;
    for (const rep of replacements) {
        try {
            await fs.unlink(rep.oldPath);
            deletedCount++;
        } catch (e) {
            console.error(`  ❌ Failed to delete original ${rep.oldPath}:`, e.message);
        }
    }
    console.log(`  -> Deleted ${deletedCount} original images.`);

    console.log('\n✨ All done! Your project is now optimized.');
}

run().catch(err => {
    console.error("An unexpected error occurred:", err);
});
