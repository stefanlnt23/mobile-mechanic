"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site-data";

export function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="panel">
      <p className="text-lg leading-relaxed text-slate-100">“{testimonials[activeIndex].quote}”</p>
      <p className="mt-3 text-sm text-slate-400">{testimonials[activeIndex].author}</p>
      <div className="mt-4 flex gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.author}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition ${
              activeIndex === index ? "w-8 bg-blue-500" : "w-2.5 bg-slate-600"
            }`}
            aria-label={`Show review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
