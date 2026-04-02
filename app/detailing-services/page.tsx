import type { Metadata } from "next";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/before-after-slider";

export const metadata: Metadata = {
  title: "Luxury Mobile Car Detailing & Paint Correction",
  description:
    "Premium mobile detailing, machine polishing, paint correction and ceramic coatings in Coventry, Solihull and Birmingham."
};

export default function DetailingServicesPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-max space-y-5">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Luxury Mobile Car Detailing &amp; Paint Correction
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Restore, protect, and elevate your vehicle&apos;s appearance. We bring state-of-the-art
            multi-stage machine polishing and professional-grade ceramic coatings directly to your
            doorstep.
          </p>
          <BeforeAfterSlider
            beforeSrc="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1400&q=80"
            afterSrc="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80"
            alt="Before and after detailing"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max grid gap-8">
          {[
            [
              "The Safe Wash & Decontamination",
              "We begin with pH-neutral snow foam, then a two-bucket safe wash using lambswool mitts. Chemical and clay decontamination removes embedded iron fallout and bonded contamination before polishing.",
              "https://images.unsplash.com/photo-1605515298946-d057f2cdd17c?auto=format&fit=crop&w=1200&q=80"
            ],
            [
              "Machine Polishing & Paint Correction",
              "Dual-action machine polishing with staged compounds removes swirl marks, haze, holograms and oxidation safely, revealing a deep mirror-like gloss finish.",
              "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=80"
            ],
            [
              "Protection & Ceramic Coatings",
              "After IPA panel prep, we apply professional 10H ceramic coatings for hydrophobic performance, UV resistance, easier maintenance, and long-term gloss retention.",
              "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
            ]
          ].map(([title, text, image], index) => (
            <div key={title} className="grid items-center gap-6 md:grid-cols-2">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-3xl font-bold text-white">{title}</h2>
                <p className="mt-3 text-slate-300">{text}</p>
              </div>
              <div
                className={`relative h-64 overflow-hidden rounded-2xl border border-slate-800 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Detailing Packages</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                name: "Single Stage Machine Polish",
                price: "From £299",
                points:
                  "Decontamination, safe wash, gloss-enhancement polish, quality sealant, and interior valet."
              },
              {
                name: "New Car Protection",
                price: "From £499",
                points:
                  "Safe wash, polish, IPA prep, 5-year ceramic coating, alloy protection, and interior fabric/leather protection."
              },
              {
                name: "Paint Enhancement",
                price: "From £649",
                points:
                  "Two-stage polish, swirl reduction, gloss enhancement, ceramic coating, and full interior detailing."
              },
              {
                name: "Full Paint Correction",
                price: "From £799",
                points:
                  "Multi-day correction for heavy defects, super polish finish, 10H ceramic coating, and deep interior detail."
              }
            ].map((pkg) => (
              <article key={pkg.name} className="panel">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">{pkg.price}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{pkg.name}</h3>
                <p className="mt-3 text-slate-300">{pkg.points}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
