import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Mobile Mechanic & Detailing Team",
  description:
    "Phone, WhatsApp, email and direct message form for mobile mechanic and detailing support."
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="panel space-y-4">
            <p className="text-lg font-semibold text-white">Contact Matrix</p>
            <a href={SITE.phoneHref} className="block text-slate-200 hover:text-white">
              📞 {SITE.phoneDisplay}
            </a>
            <a href={SITE.whatsappHref} className="btn-whatsapp w-full justify-center">
              💬 Start WhatsApp Chat
            </a>
            <a href={`mailto:${SITE.email}`} className="block text-slate-200 hover:text-white">
              ✉️ {SITE.email}
            </a>
            <p className="text-slate-300">
              Monday - Saturday: 8:00 AM - 6:00 PM
              <br />
              Emergency call-outs available.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="panel mt-8 overflow-hidden p-2">
          <iframe
            title="Service radius map"
            src="https://www.google.com/maps?q=Coventry%2C%20West%20Midlands&output=embed"
            className="h-[360px] w-full rounded-xl border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
