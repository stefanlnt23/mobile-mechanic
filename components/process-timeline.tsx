"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    title: "Tell Us What You Need",
    description: "Tell us what you need - it takes seconds.",
    proof: "No call required. No commitment.",
    image: "/photo/4 steps photos/step1.png",
    icon: SmartphoneIcon
  },
  {
    title: "Get a Clear Quote",
    description: "Transparent price, no surprises.",
    proof: "Fixed before any work starts.",
    image: "/photo/4 steps photos/step2.png",
    icon: QuoteIcon
  },
  {
    title: "We Come to You",
    description: "Fully equipped, wherever you are.",
    proof: "No towing. No waiting rooms.",
    image: "/photo/4 steps photos/step3.png",
    icon: VanIcon
  },
  {
    title: "Drive Away Happy",
    description: "Done right, ready to go.",
    proof: "Work backed by guarantee.",
    image: "/photo/4 steps photos/step4.png",
    icon: SparkCheckIcon
  }
];

const trustStrip = [
  "4.9 Google rating",
  "500+ cars serviced this year",
  "Fully insured mobile setup",
  "High-quality parts and products"
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [indicatorTop, setIndicatorTop] = useState(28);
  const [scrollActiveIndex, setScrollActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSteps((current) => {
          const next = new Set(current);

          for (const entry of entries) {
            const index = Number(entry.target.getAttribute("data-step-index"));
            if (entry.isIntersecting) {
              next.add(index);
            }
          }

          return Array.from(next).sort((a, b) => a - b);
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -12% 0px"
      }
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateActiveFromScroll = () => {
      const viewportMid = window.innerHeight * 0.42;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const midpoint = rect.top + rect.height / 2;
        const distance = Math.abs(midpoint - viewportMid);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setScrollActiveIndex(closestIndex);
      setActiveIndex((current) => current === closestIndex ? current : closestIndex);
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const step = stepRefs.current[activeIndex];
    if (!container || !step) return;

    const containerRect = container.getBoundingClientRect();
    const icon = step.querySelector<HTMLElement>("[data-process-icon]");
    const iconRect = (icon ?? step).getBoundingClientRect();
    const nextTop = iconRect.top - containerRect.top + iconRect.height / 2;
    setIndicatorTop(nextTop);
  }, [activeIndex, visibleSteps]);

  return (
    <div className="process-reassurance">
      <div className="process-proof-card">
        <div className="process-proof-rating">
          <span className="process-proof-stars" aria-hidden="true">
            ★★★★★
          </span>
          <span>4.9 Google rating</span>
        </div>
        <p className="process-proof-copy">
          Trusted across the West Midlands with a professional mobile setup and a reputation for
          turning up, communicating clearly, and getting the job done right.
        </p>
      </div>

      <div
        ref={containerRef}
        className="process-timeline-track"
        onMouseLeave={() => setActiveIndex(scrollActiveIndex)}
      >
        <div
          className="process-timeline-indicator"
          style={{ transform: `translateY(${indicatorTop}px)` }}
          aria-hidden="true"
        />

        {processSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeIndex;
          const isVisible = visibleSteps.includes(index);

          return (
            <article
              key={step.title}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              data-step-index={index}
              className={`process-step ${
                isActive ? "process-step--active" : "process-step--inactive"
              } ${isVisible ? "process-step--visible" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {isActive ? (
                <div className="process-step-visual" aria-hidden="true">
                  <div
                    className="process-step-visual-image"
                    style={{ backgroundImage: `url("${step.image}")` }}
                  />
                  <div className="process-step-visual-fade" />
                </div>
              ) : null}
              <div className="process-step-rail">
                <div className="process-step-icon" data-process-icon="true">
                  <Icon />
                </div>
                {index < processSteps.length - 1 ? <div className="process-step-line" /> : null}
              </div>
              <div className="process-step-body">
                <span className="process-step-label">Step {index + 1}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-copy">{step.description}</p>
                <p className="process-step-proof">{step.proof}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="process-trust-strip" aria-label="Trust signals">
        {trustStrip.map((item) => (
          <div key={item} className="process-trust-item">
            <span className="process-trust-check" aria-hidden="true">
              ✓
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmartphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <rect
        x="7"
        y="2.75"
        width="10"
        height="18.5"
        rx="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M10 5.75h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5H7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.8V8h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function VanIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M3 8.5A1.5 1.5 0 0 1 4.5 7H13a1 1 0 0 1 1 1v7H4.5A1.5 1.5 0 0 1 3 13.5v-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M14 10h3.3a1 1 0 0 1 .8.4l1.6 2.1c.2.3.3.6.3.9V15H14v-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="16.75" r="1.75" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle
        cx="17"
        cy="16.75"
        r="1.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SparkCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="m8.5 12.5 2.2 2.3 4.8-5.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.5 13 6l2.5 1-2.5 1L12 11 11 8l-2.5-1L11 6l1-2.5ZM18.5 11l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4ZM6 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z"
        fill="currentColor"
      />
    </svg>
  );
}
