import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

/**
 * Wraps a section and reveals its content (fade + slide-up) on scroll.
 * Each direct child of `.reveal-stagger` gets staggered.
 */
export function SectionReveal({ children, className = "", id, delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(".gs-reveal");
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y: 60 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 82%",
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            delay,
          });
        },
        once: true,
      });
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
}
