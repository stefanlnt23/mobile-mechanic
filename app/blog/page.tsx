import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mobile Auto Advice & Insights",
  description:
    "Educational blog content about mobile mechanics, detailing pricing, brakes and ceramic coatings."
};

export default function BlogPage() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Blog &amp; Advice Hub</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Educational content to answer common automotive questions and help you make confident
          maintenance decisions.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="panel">
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-slate-300">{post.excerpt}</p>
              <Link href="/contact" className="mt-4 inline-block text-blue-300">
                Read article outline →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
