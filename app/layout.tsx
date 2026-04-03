import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyBar } from "@/components/mobile-sticky-bar";
import { SITE, serviceCities } from "@/lib/site-data";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE.legalName ?? SITE.name,
  image: `${SITE.domain}/images/logo.svg`,
  "@id": SITE.domain,
  url: SITE.domain,
  telephone: SITE.phoneE164 ?? SITE.phoneHref.replace("tel:", ""),
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coventry",
    addressRegion: "West Midlands",
    addressCountry: "GB"
  },
  priceRange: "££",
  areaServed: serviceCities.map((city) => city.split("-").map((x) => x[0].toUpperCase() + x.slice(1)).join(" ")),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00"
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Mobile Mechanic West Midlands | At-Home Car Repair & Detailing",
    template: "%s | Premium Mobile Mechanic & Detailing"
  },
  description:
    "Expert mobile mechanic and premium detailing across Coventry, Solihull, Birmingham and nearby areas. Transparent pricing, same-day availability, and fully mobile service.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Mobile Mechanic & Detailing Services at Your Doorstep",
    description:
      "Fast repairs, diagnostics, servicing, paint correction and ceramic coatings delivered to your driveway in the West Midlands.",
    url: SITE.domain,
    siteName: SITE.name,
    locale: "en_GB",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <MobileStickyBar />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}


