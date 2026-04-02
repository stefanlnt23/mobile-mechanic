import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { trustPills, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mobile Mechanic West Midlands",
  description:
    "Mobile mechanic, diagnostics, servicing and luxury detailing at your doorstep across the West Midlands.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-max grid items-center gap-8 md:grid-cols-5">
          <div className="space-y-6 md:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              West Midlands Mobile Automotive Specialists
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Mobile Mechanic &amp; Detailing Services at Your Doorstep.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              We bring expert automotive repairs, advanced diagnostics, and premium car detailing
              directly to your home or workplace across the West Midlands. Experience fast,
              reliable service with completely transparent pricing.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn-primary">
                📞 Call Now
              </a>
              <a href={SITE.whatsappHref} className="btn-outline">
                💬 WhatsApp Us
              </a>
              <Link href="/pricing" className="btn text-blue-300 hover:text-blue-200">
                Get a Free Quote →
              </Link>
            </div>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-2xl border border-slate-800 md:col-span-2 md:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80"
              alt="Mechanic working on a car outdoors"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-max grid gap-3 md:grid-cols-4">
          {trustPills.map((item) => (
            <div key={item} className="panel p-4 text-center text-sm font-semibold text-slate-100">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Our Core Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="panel group">
              <div className="relative mb-5 h-52 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                  alt="Engine bay repair"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">Expert Mobile Mechanic</h3>
              <ul className="mt-3 grid gap-1 text-slate-300">
                <li>Diagnostics &amp; Fault Finding</li>
                <li>Brake Fitting &amp; Repairs</li>
                <li>Suspension Repairs</li>
                <li>Battery Replacements</li>
                <li>Full Car Servicing</li>
              </ul>
              <Link href="/mechanic-services" className="mt-5 inline-block text-blue-300">
                View Mechanic Services →
              </Link>
            </article>
            <article className="panel group">
              <div className="relative mb-5 h-52 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium car detailing"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">Luxury Mobile Detailing</h3>
              <ul className="mt-3 grid gap-1 text-slate-300">
                <li>Ceramic Coating (Up to 5 Years)</li>
                <li>Paint Correction &amp; Enhancement</li>
                <li>Deep Interior Valet</li>
                <li>Scratch Removal</li>
              </ul>
              <Link href="/detailing-services" className="mt-5 inline-block text-blue-300">
                View Detailing Packages →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-white md:text-4xl">How Our Mobile Service Works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              "Contact Us - Reach out by phone, WhatsApp, or online quote form.",
              "Get a Quote - Transparent, upfront pricing based on your exact needs.",
              "We Come to You - Fully equipped van arrives at home or workplace.",
              "Job Completed - Repair or detail completed without visiting a garage."
            ].map((step, index) => (
              <article key={step} className="panel">
                <p className="text-sm font-semibold text-blue-300">Step {index + 1}</p>
                <p className="mt-2 text-slate-200">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-white md:text-4xl">What Customers Are Saying</h2>
          <div className="mt-8">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max">
          <div className="panel text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to get your car sorted without leaving home?
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href={SITE.phoneHref} className="btn-primary">
                📞 Call {SITE.phoneDisplay}
              </a>
              <Link href="/pricing" className="btn-outline">
                📅 Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
