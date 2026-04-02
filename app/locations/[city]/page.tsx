import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceCities } from "@/lib/site-data";
import { toTitleCaseCity } from "@/lib/utils";

type CityPageProps = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return serviceCities.map((city) => ({ city }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const cityName = toTitleCaseCity(city);
  return {
    title: `Mobile Mechanic & Car Detailing in ${cityName}`,
    description: `Searching for a reliable mobile mechanic in ${cityName}? We provide at-home repairs, diagnostics, servicing and detailing.`
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;

  if (!serviceCities.includes(city)) {
    notFound();
  }

  const cityName = toTitleCaseCity(city);

  return (
    <section className="section-pad">
      <div className="container-max max-w-4xl space-y-6">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Mobile Mechanic &amp; Car Detailing in {cityName} – We Come to You
        </h1>
        <h2 className="text-2xl font-semibold text-slate-100">Expert At-Home Car Repairs in {cityName}</h2>
        <p className="text-slate-300">
          Searching for a reliable mobile mechanic in {cityName}? You no longer need to waste
          valuable time sitting in a traditional garage waiting room or arranging complicated
          transport. Our fully equipped mobile service vans travel throughout {cityName} and nearby
          neighborhoods daily, delivering top-tier mechanical repairs, advanced diagnostics, and
          premium car detailing directly at your driveway or workplace.
        </p>
        <div className="panel">
          <p className="font-semibold text-white">Popular local services include:</p>
          <ul className="mt-3 grid gap-2 text-slate-300">
            <li>Clutch replacement and gearbox-related diagnostics</li>
            <li>Brake pad and disc replacement</li>
            <li>Suspension and steering component repairs</li>
            <li>Vehicle diagnostics and warning light investigation</li>
            <li>Ceramic coating and multi-stage paint correction</li>
          </ul>
        </div>
        <p className="text-slate-300">
          We cover the {cityName} area daily. Contact us today for same-day availability and
          transparent, upfront pricing.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/pricing" className="btn-primary">
            Get a Quote
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
