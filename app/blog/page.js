import Link from "next/link";
import { PageBanner } from "@/components/HeroBanner";
import { blogPosts } from "@/utils/siteData";
import pageStyles from "@/styles/Page.module.css";

export const metadata = {
  title: "Blog",
  description: "Moving tips and relocation guides from Jaipur Packers And Movers.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Moving" accent="Blog" description="Useful relocation tips for safer and smoother moving." />
      <section className="section">
        <div className="container">
          <div className={pageStyles.blogList}>
            {blogPosts.map((post) => (
              <Link className={pageStyles.blogCard} href={`/blog/${post.slug}`} key={post.slug}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
