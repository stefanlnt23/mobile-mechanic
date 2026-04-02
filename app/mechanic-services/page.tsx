import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Expert Mobile Mechanic Services in the West Midlands",
  description:
    "Routine servicing, diagnostics, brakes, suspension, clutch, timing belt and auto electrical repairs at your location."
};

const mechanicFaqs = [
  {
    question: "Can you really fix complex car issues at my home?",
    answer:
      "Absolutely. Our vans are fully equipped mobile workshops carrying specialist tools, diagnostics, and environmental mats for over 95% of traditional garage repairs, including heavy suspension and timing belts."
  },
  {
    question: "What happens if extra work is needed during a repair?",
    answer:
      "We pause, show you the issue, explain the options, and provide a revised quote. No additional work begins without your clear approval."
  },
  {
    question: "Do mobile mechanics charge a premium for convenience?",
    answer:
      "Usually not. Without large garage overheads, we deliver main-dealer level expertise at competitive independent-garage pricing."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: mechanicFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function MechanicServicesPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-max grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Expert Mobile Mechanic Services in the West Midlands
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              From routine servicing to complex diagnostics and mechanical repairs, our fully
              equipped mobile workshop brings the expertise of a traditional garage directly to
              your driveway.
            </p>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-2xl border border-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1632823469606-204f5d5cf4f7?auto=format&fit=crop&w=1200&q=80"
              alt="Mechanic with diagnostic tablet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max grid gap-5 md:grid-cols-2">
          {[
            [
              "Mobile Car Servicing",
              "Interim and major servicing with oil/filter changes and full multi-point checks of brakes, steering, suspension and safety systems."
            ],
            [
              "Brake Fitting and Repairs",
              "Brake pad, disc, drum and shoe replacement, brake line repairs, caliper fault correction and full system bleeding."
            ],
            [
              "Advanced Engine Diagnostics",
              "Professional OBD-II diagnostics with root-cause troubleshooting for warning lights, sensors, injectors and alternator-related faults."
            ],
            [
              "Mobile Auto Electrician",
              "Electrical diagnostics for battery drains, central locking faults, windows, starter issues and wiring problems."
            ],
            [
              "Suspension Repair & Replacement",
              "On-site spring, shock absorber, ball joint, wheel bearing, wishbone and subframe-related repairs."
            ],
            [
              "Timing Belt & Water Pump",
              "Critical preventative replacement services for domestic and commercial vehicles, completed safely at your location."
            ],
            [
              "Clutch Repair & Replacement",
              "Same-day clutch support where possible, including release bearing, flywheel assessment and hydraulic bleeding."
            ]
          ].map(([title, desc]) => (
            <article key={title} className="panel">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-slate-300">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Common Questions</h2>
          <div className="mt-6 grid gap-4">
            {mechanicFaqs.map((item) => (
              <details key={item.question} className="panel">
                <summary className="cursor-pointer text-lg font-semibold text-slate-100">
                  {item.question}
                </summary>
                <p className="mt-3 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
