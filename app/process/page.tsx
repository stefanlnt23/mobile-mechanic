import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Our Mobile Service Works",
  description:
    "Understand every step from first contact to handover so you know exactly what to expect."
};

export default function ProcessPage() {
  const steps = [
    "The Initial Contact & Quote Formulation. You reach out via phone, WhatsApp, or our online form with registration details and service goals.",
    "Scheduling & Logistics. We agree a date, time and location that fits your schedule at home, work, or safe roadside location.",
    "Arrival & Physical Assessment. Our technician arrives, confirms diagnostics, explains final scope and answers questions.",
    "Precision Execution. Mechanical or detailing work is completed with professional tools and environmental protection mats.",
    "Handover, Inspection & Payment. We walk you through outcomes and process secure payment by mobile card reader or transfer."
  ];

  return (
    <section className="section-pad">
      <div className="container-max">
        <h1 className="text-4xl font-bold text-white md:text-5xl">How Our Mobile Service Works</h1>
        <div className="mt-10 space-y-5">
          {steps.map((step, index) => (
            <article key={step} className="panel relative pl-16">
              <div className="absolute left-5 top-6 h-8 w-8 rounded-full bg-blue-600 text-center text-sm font-bold leading-8 text-white">
                {index + 1}
              </div>
              <p className="text-slate-200">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
