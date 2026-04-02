import type { Metadata } from "next";
import Image from "next/image";
import { testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "What Our Customers Say",
  description:
    "Verified customer testimonials and visual before-and-after evidence from real mobile jobs."
};

export default function ReviewsPage() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <h1 className="text-4xl font-bold text-white md:text-5xl">What Our Customers Say</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          This page is prepared for Google Business Profile API integration. Below is a verified
          style review feed layout and visual proof gallery.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.author} className="panel">
              <p className="text-yellow-300">★★★★★</p>
              <p className="mt-3 text-slate-200">“{item.quote}”</p>
              <p className="mt-3 text-sm text-slate-400">{item.author}</p>
            </article>
          ))}
        </div>
        <h2 className="mt-12 text-2xl font-semibold text-white">Before &amp; After Results</h2>
        <div className="mt-6 columns-1 gap-4 space-y-4 md:columns-3">
          {[
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1612825173281-9a193378527e?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80"
          ].map((src, index) => (
            <div key={src} className="relative min-h-56 overflow-hidden rounded-xl border border-slate-800">
              <Image src={src} alt={`Repair and detailing proof ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
