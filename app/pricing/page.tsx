import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Get an Instant Mobile Service Quote",
  description:
    "Request a transparent, no-obligation quote for diagnostics, repairs, servicing, paint correction and ceramic coating."
};

export default function PricingPage() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Get an Instant Mobile Service Quote</h1>
          <p className="mt-4 text-slate-300">
            Pricing varies by vehicle make, model, and fault or paint condition. Fill out the form
            below and our team will contact you quickly with a transparent no-obligation quote.
          </p>
          <div className="mt-8">
            <QuoteForm />
          </div>
          <a href={SITE.whatsappHref} className="btn-whatsapp mt-5 w-full py-4 text-base">
            💬 Message Us on WhatsApp for a Faster Reply
          </a>
        </div>
      </div>
    </section>
  );
}
