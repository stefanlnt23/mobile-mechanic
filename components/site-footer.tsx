import Image from "next/image";
import Link from "next/link";
import { SITE, serviceCities } from "@/lib/site-data";
import { toTitleCaseCity } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pb-24 pt-14 md:pb-10">
      <div className="container-max grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt={`${SITE.name} logo`}
              width={240}
              height={84}
              className="h-12 w-auto"
            />
            <div>
              <p className="text-lg font-semibold text-white">{SITE.name}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{SITE.tagline}</p>
            </div>
          </div>
          <p className="text-sm text-slate-300">
            Expert mechanical repairs and premium detailing at your doorstep.
          </p>
          <p className="text-sm text-slate-300">
            Fully mobile service operating across the West Midlands.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-white">Services</p>
          <Link href="/mechanic-services" className="block text-slate-300 hover:text-white">
            Mobile Mechanic Repairs
          </Link>
          <Link href="/detailing-services" className="block text-slate-300 hover:text-white">
            Paint Correction
          </Link>
          <Link href="/detailing-services" className="block text-slate-300 hover:text-white">
            Ceramic Coating
          </Link>
          <Link href="/pricing" className="block text-slate-300 hover:text-white">
            Instant Quote
          </Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-white">Service Areas</p>
          {serviceCities.map((city) => (
            <Link
              key={city}
              href={`/locations/${city}`}
              className="block text-slate-300 hover:text-white"
            >
              {toTitleCaseCity(city)}
            </Link>
          ))}
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-white">Contact & Legal</p>
          <a href={SITE.phoneHref} className="block text-slate-300 hover:text-white">
            {SITE.phoneDisplay}
          </a>
          <a href={SITE.whatsappHref} className="block text-slate-300 hover:text-white">
            WhatsApp
          </a>
          <a href={`mailto:${SITE.email}`} className="block text-slate-300 hover:text-white">
            {SITE.email}
          </a>
          <p className="text-slate-300">{SITE.addressLine}</p>
          <Link href="/faq" className="block text-slate-300 hover:text-white">
            FAQ
          </Link>
          <Link href="/contact" className="block text-slate-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
      <div className="container-max mt-10 border-t border-slate-800 pt-5 text-xs text-slate-400">
        &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}


