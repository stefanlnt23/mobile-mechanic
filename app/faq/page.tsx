import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Mechanic & Detailing FAQ",
  description:
    "Answers to common questions about at-home repairs, diagnostics, ceramic coatings and pricing."
};

export default function FaqPage() {
  const faqs = [
    {
      q: "Can a mobile mechanic fix brakes on my driveway?",
      a: "Yes. We replace pads, discs, shoes and drums on-site, and we can also carry out hydraulic bleeding and brake-line repairs."
    },
    {
      q: "Do I need to provide water or power for detailing?",
      a: "No. Our setup is self-sufficient with mobile power and detailing equipment, so your service remains convenient and controlled."
    },
    {
      q: "How long does paint correction take?",
      a: "Single-stage enhancement is usually completed in one day. Multi-stage correction for heavily swirled paint can take two or more days."
    },
    {
      q: "Can you diagnose warning lights at home?",
      a: "Yes. We use professional OBD diagnostics and physical inspection to identify root causes, not just clear fault codes."
    },
    {
      q: "Do you offer same-day appointments?",
      a: "Same-day slots are often available depending on location and job complexity. Contact us by phone or WhatsApp for live availability."
    }
  ];

  return (
    <section className="section-pad">
      <div className="container-max max-w-4xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Frequently Asked Questions</h1>
        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <details key={item.q} className="panel">
              <summary className="cursor-pointer text-lg font-semibold text-slate-100">{item.q}</summary>
              <p className="mt-3 text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
