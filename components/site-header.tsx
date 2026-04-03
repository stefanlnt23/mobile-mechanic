"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, navItems } from "@/lib/site-data";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [logoDark, setLogoDark] = useState(false);

  useEffect(() => {
    const updateLogoTone = () => {
      const rootStyles = window.getComputedStyle(document.documentElement);
      const surfaceRaw = rootStyles.getPropertyValue("--theme-surface").trim();
      const channels = surfaceRaw
        .split(/\s+/)
        .map((value) => Number(value))
        .filter((value) => Number.isFinite(value));

      if (channels.length !== 3) {
        setLogoDark(false);
        return;
      }

      const [r, g, b] = channels;
      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      setLogoDark(luminance > 0.58);
    };

    updateLogoTone();

    const observer = new MutationObserver(updateLogoTone);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--theme-overlay)/0.12)] bg-[rgb(var(--theme-surface)/0.86)] backdrop-blur-md">
      <div className="container-max flex h-14 items-center justify-between gap-3">
        <Link href="/" className="flex items-center text-slate-100">
          <span className="relative h-11 w-[150px] overflow-hidden">
            <Image
              src="/images/logo.svg"
              alt={`${SITE.name} logo`}
              fill
              sizes="150px"
              className={`object-contain object-left ${logoDark ? "invert" : ""}`}
              priority
            />
          </span>
        </Link>
        <nav className="hidden items-center gap-3 lg:gap-4 md:flex">
          {navItems.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white whitespace-nowrap leading-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex shrink-0">
          <ThemeSwitcher />
          <a href={SITE.phoneHref} className="btn-primary whitespace-nowrap">
            Call Now
          </a>
          <a href={SITE.whatsappHref} className="btn-outline whitespace-nowrap">
            WhatsApp
          </a>
        </div>
        <button
          type="button"
          className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="container-max grid gap-3 py-4">
            <ThemeSwitcher />
            <a href={SITE.phoneHref} className="btn-primary">
              Call {SITE.phoneDisplay}
            </a>
            <a href={SITE.whatsappHref} className="btn-whatsapp">
              WhatsApp
            </a>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-1 text-slate-200 hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

