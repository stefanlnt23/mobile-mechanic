import { SITE } from "@/lib/site-data";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 grid w-full grid-cols-2 md:hidden">
      <a
        href={SITE.phoneHref}
        className="flex h-14 items-center justify-center bg-slate-900 text-sm font-semibold text-white"
      >
        📞 Call Us
      </a>
      <a
        href={SITE.whatsappHref}
        className="flex h-14 items-center justify-center bg-green-500 text-sm font-semibold text-slate-950"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
