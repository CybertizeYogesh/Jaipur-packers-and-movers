import Image from "next/image";
import { galleryItems } from "@/utils/siteData";
import styles from "@/styles/Cards.module.css";

export default function GalleryGrid({ items = galleryItems }) {
  return (
    <div className={styles.gallery}>
      {items.map((item) => (
        <figure className={styles.galleryItem} key={`${item.title}-${item.image}`}>
          <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
          <span>{item.title}</span>
        </figure>
      ))}
    </div>
  );
}
