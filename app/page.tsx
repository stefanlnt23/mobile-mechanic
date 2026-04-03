import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProcessTimeline } from "@/components/process-timeline";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { SITE } from "@/lib/site-data";
import detailingHomeImage from "@/photo/car-detaling-home-page.png";
import homeHeaderImage from "@/photo/home-header.png";
import mechanicHomeImage from "@/photo/car-mobile-mechanic-home-page.png";

const serviceCards = [
  {
    theme: "mechanic",
    eyebrow: "AUTOMOTIVE SERVICES",
    title: "Expert Mobile Mechanic",
    description: "On-site repairs at your home or workplace.",
    accent: "home or workplace",
    benefits: [
      { icon: WrenchIcon, label: "Expert diagnostics" },
      { icon: ToolboxIcon, label: "Quality parts" }
    ],
    href: "/mechanic-services",
    cta: "Go to Mechanic Services",
    ctaStyle: "primary",
    image: mechanicHomeImage
  },
  {
    theme: "detailing",
    eyebrow: "DETAILING SERVICES",
    title: "Luxury Mobile Detailing",
    description: "Showroom-level finish wherever you are.",
    accent: "Showroom-level",
    benefits: [
      { icon: SparkleMiniIcon, label: "Paint enhancement" },
      { icon: ShieldIcon, label: "Protective coatings" }
    ],
    href: "/detailing-services",
    cta: "Choose Detailing Services",
    ctaStyle: "secondary",
    image: detailingHomeImage
  }
];

const trustHighlights = [
  {
    label: "5.0 Rated on Google",
    theme: "rating",
    icon: StarBadgeIcon
  },
  {
    label: "20+ Years Experience",
    theme: "experience",
    icon: ExperienceIcon
  },
  {
    label: "Fully Mobile Service",
    theme: "mobile",
    icon: VanBadgeIcon
  },
  {
    label: "Transparent Pricing",
    theme: "pricing",
    icon: PoundBadgeIcon
  }
];

export const metadata: Metadata = {
  title: "Precision Auto Care | Mobile Mechanic & Detailing",
  description:
    "Precision Auto Care delivers expert mobile mechanic repairs and premium mobile detailing with transparent pricing and a premium at-home experience.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <section className="section-pad overflow-hidden">
        <div className="container-max grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center rounded-full border border-orange-400/25 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-200 shadow-[0_0_30px_rgba(249,115,22,0.16)]">
              Precision Auto Care
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] text-white md:text-6xl xl:text-7xl">
                Expert mobile mechanics and detailing without leaving your driveway.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Diagnostics, repairs, and showroom-level detailing delivered to your home or
                workplace with clear pricing and no hassle.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn-primary shadow-[0_18px_40px_rgba(249,115,22,0.32)]">
                Call Now
              </a>
              <a href={SITE.whatsappHref} className="btn-outline">
                WhatsApp Us
              </a>
              <Link href="/pricing" className="btn btn-ghost-blue">
                Get a Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-300">
              <span className="text-orange-300">4.9 rating</span>
              <span className="text-slate-500">•</span>
              <span>200+ happy customers</span>
              <span className="text-slate-500">•</span>
              <span>Trusted across Coventry & Birmingham</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { value: "No Garage Visits", label: "we come to you" },
                { value: "Clear Pricing Upfront", label: "quotes before work starts" },
                { value: "Fully Mobile Setup", label: "repairs and detailing on site" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-glow" />
            <div className="hero-visual-frame">
              <div className="hero-visual-single">
                <Image
                  src={homeHeaderImage}
                  alt="Precision Auto Care mobile mechanic and detailing service at a driveway"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hero-visual-overlay" />
              <div className="hero-badge hero-badge-top">
                <span className="hero-badge-dot" />
                Mechanic + Detailing
              </div>
              <div className="hero-badge hero-badge-bottom">
                Trusted mobile service
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-max grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {trustHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`trust-badge trust-badge--${item.theme} ${
                  index === 0 ? "trust-badge--featured" : ""
                }`}
              >
                <span className="trust-badge-icon">
                  <Icon />
                </span>
                <span className="trust-badge-label">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-pad section-tone-services">
        <div className="container-max">
          <div>
            <p className="section-kicker">Core Services</p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Two premium service doors, one trusted mobile team.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {serviceCards.map((card) => (
              <article key={card.title} className={`service-door service-door--${card.theme} group`}>
                <div className="service-door-media">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="service-door-media-overlay" />
                  <div className="service-door-media-title">
                    <h3 className="max-w-lg text-3xl font-semibold text-white md:text-4xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="service-door-content">
                  <div className="space-y-4">
                    <p className="service-door-tag">{card.eyebrow}</p>
                    <p className="service-door-description">
                      {renderAccentText(card.description, card.accent)}
                    </p>
                    <div className="service-door-benefits">
                      {card.benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                          <div key={benefit.label} className="service-door-benefit">
                            <span className="service-door-benefit-icon">
                              <Icon />
                            </span>
                            <span>{benefit.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="service-door-cta-wrap">
                    <Link
                      href={card.href}
                      className={`service-door-cta ${
                        card.ctaStyle === "secondary"
                          ? "service-door-cta--secondary"
                          : "service-door-cta--primary"
                      }`}
                    >
                      {card.cta}
                      <span aria-hidden="true" className="service-door-cta-arrow">
                        -&gt;
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-tone-process">
        <div className="container-max">
          <div className="process-shell">
            <div className="process-intro">
              <p className="section-kicker">How It Works</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                A mobile service process that feels effortless from first message to final shine.
              </h2>
              <p className="process-intro-copy">
                Fast to book, easy to understand, and built to keep your day moving.
              </p>
            </div>

            <div className="process-timeline" aria-label="How our mobile service works">
              <ProcessTimeline />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-tone-reviews">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="section-kicker">Google Reviews</p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              What customers are saying after booking us to their driveway.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { value: "4.9 rating", label: "average rating" },
                { value: "200+", label: "verified reviews" },
                { value: "Coventry to Birmingham", label: "trusted locally" }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="section-pad pt-10">
        <div className="container-max">
          <div className="cta-shell">
            <div>
              <p className="section-kicker">Book Precision Auto Care</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Ready to get expert repairs or a showroom finish without leaving home?
              </h2>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn-primary shadow-[0_18px_40px_rgba(249,115,22,0.32)]">
                Call {SITE.phoneDisplay}
              </a>
              <Link href="/pricing" className="btn-outline">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function renderAccentText(text: string, accent: string) {
  const escapedAccent = accent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(${escapedAccent})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isHighlight = accent.toLowerCase() === part.toLowerCase();

    return isHighlight ? (
      <span key={`${part}-${index}`} className="service-door-highlight">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    );
  });
}

function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M14.5 5.2a4 4 0 0 0 4.3 5.2l-7.9 7.9a2 2 0 1 1-2.8-2.8l7.9-7.9a4 4 0 0 0-5.2-4.3l2.4 2.4-1.9 1.9-2.4-2.4a4 4 0 0 0 5.6 5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ToolboxIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M4 9.5h16v8.2a1.3 1.3 0 0 1-1.3 1.3H5.3A1.3 1.3 0 0 1 4 17.7V9.5Zm5-3.5h6a1 1 0 0 1 1 1v2.5H8V7a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M10.5 12h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SparkleMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 3.5 13.3 7l3.5 1.3-3.5 1.3L12 13l-1.3-3.4L7.2 8.3 10.7 7 12 3.5Z"
        fill="currentColor"
      />
      <path
        d="M18.5 13.5 19.2 15l1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7.7-1.5Z"
        fill="currentColor"
      />
      <path
        d="M6.5 14.5 7.3 17l2.5.8-2.5.8-.8 2.5-.8-2.5-2.5-.8 2.5-.8.8-2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 3.8 18 6v5.5c0 4-2.5 6.7-6 8.7-3.5-2-6-4.7-6-8.7V6l6-2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m9.8 11.8 1.5 1.5 3-3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="m12 3.2 2.5 5.1 5.6.8-4.1 4 .9 5.7-4.9-2.7-4.9 2.7.9-5.7-4.1-4 5.6-.8L12 3.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 5v7l4 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

function VanBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M3 9a1.5 1.5 0 0 1 1.5-1.5H13a1 1 0 0 1 1 1V15H4.5A1.5 1.5 0 0 1 3 13.5V9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M14 10h3.4a1 1 0 0 1 .8.4l1.5 2c.2.3.3.6.3.9V15H14v-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="16.8" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="16.8" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PoundBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M15.2 6.8a3.7 3.7 0 0 0-6.3 2.6c0 1 .3 1.9.8 2.7l.7 1.1H8m0 0h8m-8 0c.4 1 .2 2-.7 3l-1.1 1.2h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
