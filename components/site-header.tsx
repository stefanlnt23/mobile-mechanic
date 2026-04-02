"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE, navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-wide text-slate-100 md:text-base">
          Premium Mobile Auto
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href={SITE.phoneHref} className="btn-primary">
            Call Now
          </a>
          <a href={SITE.whatsappHref} className="btn-outline">
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
            <a href={SITE.phoneHref} className="btn-primary">
              📞 {SITE.phoneDisplay}
            </a>
            <a href={SITE.whatsappHref} className="btn-whatsapp">
              💬 WhatsApp
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
