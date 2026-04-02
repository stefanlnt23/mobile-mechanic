import Link from "next/link";
import type { Metadata } from "next";
import { serviceCities } from "@/lib/site-data";
import { toTitleCaseCity } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Areas We Cover in the West Midlands",
  description:
    "Explore all local areas we cover for mobile mechanic repairs and premium detailing services."
};

export default function ServiceAreasPage() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Areas We Cover in the West Midlands</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Our fully equipped vans travel extensively across the region to deliver at-home repairs,
          diagnostics, servicing and premium detailing.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {serviceCities.map((city) => (
            <Link
              key={city}
              href={`/locations/${city}`}
              className="panel p-4 text-center text-lg font-semibold text-slate-100 transition hover:border-blue-500"
            >
              {toTitleCaseCity(city)}
            </Link>
          ))}
        </div>
        <div className="panel mt-8 overflow-hidden p-2">
          <iframe
            title="West Midlands service coverage map"
            src="https://www.google.com/maps?q=West%20Midlands%20UK&output=embed"
            className="h-[360px] w-full rounded-xl border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
