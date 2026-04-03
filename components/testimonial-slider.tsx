"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { testimonials } from "@/lib/site-data";

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (!isMobile || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isMobile, isPaused]);

  const visibleReviews = useMemo(
    () => testimonials.map((testimonial, index) => ({ ...testimonial, index })),
    []
  );

  const goToSlide = (index: number) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    setIsPaused(true);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX ?? null;

    if (startX !== null && endX !== null) {
      const delta = startX - endX;

      if (Math.abs(delta) > 40) {
        goToSlide(activeIndex + (delta > 0 ? 1 : -1));
      }
    }

    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <div className="space-y-6">
      <div className="hidden gap-5 md:grid md:grid-cols-3">
        {visibleReviews.map((testimonial) => (
          <ReviewCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>

      <div
        className="md:hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {visibleReviews.map((testimonial) => (
              <div key={testimonial.author} className="min-w-full pr-1">
                <ReviewCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {visibleReviews.map((testimonial, index) => (
              <button
                key={testimonial.author}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-orange-400" : "w-2.5 bg-slate-600"
                }`}
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:border-orange-400/40 hover:bg-white/[0.08]"
              aria-label="Previous review"
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:border-orange-400/40 hover:bg-white/[0.08]"
              aria-label="Next review"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({
  testimonial
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="group h-full rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.32)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-[0_24px_50px_rgba(2,6,23,0.44),0_0_24px_rgba(59,130,246,0.08)] md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-bold text-white">
            {testimonial.initials}
          </div>
          <div>
            <p className="font-semibold text-white">{testimonial.author}</p>
            <p className="text-sm text-slate-400">{testimonial.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
          <GoogleGlyph />
          Google
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-[#fbbc04]">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
          <span className="text-sm font-medium text-slate-200">5.0</span>
        </div>
        <span className="text-sm text-slate-500">{testimonial.age}</span>
      </div>

      <p className="mt-4 text-[15px] leading-7 text-slate-300">{testimonial.quote}</p>
    </article>
  );
}

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className="h-4 w-4">
      <path
        d="M16.18 9.2c0-.57-.05-.97-.16-1.4H9.18v2.63h4.01c-.08.65-.53 1.63-1.53 2.29l-.01.09 2.22 1.72.15.01c1.36-1.25 2.16-3.08 2.16-5.34Z"
        fill="#4285F4"
      />
      <path
        d="M9.18 16.3c1.97 0 3.62-.64 4.83-1.76l-2.3-1.82c-.61.42-1.43.72-2.53.72-1.93 0-3.57-1.25-4.15-2.99l-.08.01-2.3 1.79-.03.07c1.2 2.37 3.67 3.98 6.56 3.98Z"
        fill="#34A853"
      />
      <path
        d="M5.03 10.45A4.9 4.9 0 0 1 4.8 9c0-.5.08-.98.22-1.45l-.01-.1L2.68 5.63l-.08.04A7.25 7.25 0 0 0 1.8 9c0 1.18.28 2.29.8 3.33l2.43-1.88Z"
        fill="#FBBC05"
      />
      <path
        d="M9.18 4.56c1.39 0 2.33.59 2.87 1.08l2.1-2.03C12.8 2.42 11.15 1.7 9.18 1.7c-2.89 0-5.36 1.61-6.58 3.97l2.41 1.88c.59-1.74 2.23-2.99 4.17-2.99Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="m10 1.8 2.5 5.1 5.6.8-4 3.9.9 5.5-5-2.7-5 2.7.9-5.5-4-3.9 5.6-.8L10 1.8Z" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
      <path d="M11.5 4.5 6 10l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
      <path d="M8.5 4.5 14 10l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
