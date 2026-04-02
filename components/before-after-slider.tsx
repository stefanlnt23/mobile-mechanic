"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
};

export function BeforeAfterSlider({ beforeSrc, afterSrc, alt }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  function updatePosition(clientX: number) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    const value = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, value)));
  }

  return (
    <div
      ref={containerRef}
      className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-slate-800 md:h-[480px]"
      onPointerDown={(event) => {
        updatePosition(event.clientX);
        (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (event.buttons === 1) {
          updatePosition(event.clientX);
        }
      }}
    >
      <Image src={beforeSrc} alt={`${alt} before`} fill className="object-cover" />
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={afterSrc} alt={`${alt} after`} fill className="object-cover" />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-1 bg-white/90"
        style={{ left: `${position}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-full border border-white bg-slate-900 px-3 py-1 text-xs font-semibold text-white"
        style={{ left: `calc(${position}% - 34px)` }}
      >
        Drag
      </div>
    </div>
  );
}
