import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { PageBanner } from "@/components/HeroBanner";
import { blogPosts, getPost } from "@/utils/siteData";
import pageStyles from "@/styles/Page.module.css";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` }
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner title={post.title} description={post.excerpt} />
      <section className="section">
        <article className={`container-narrow ${pageStyles.policy}`}>
          <p>{post.content}</p>
          <h2>Quick checklist</h2>
          <ul>
            <li>Confirm item list and destination details.</li>
            <li>Keep documents, jewelry, and daily-use essentials with you.</li>
            <li>Label fragile and priority boxes clearly.</li>
            <li>Share parking, floor, and lift details before move day.</li>
          </ul>
          <p style={{ marginTop: 24 }}>
            <Link className="button" href="/blog">
              Back to Blog
            </Link>
          </p>
        </article>
      </section>
      <CTASection />
    </>
  );
}
