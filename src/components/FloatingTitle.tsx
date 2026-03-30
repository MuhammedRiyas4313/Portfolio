import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * FloatingTitle — REFINED DYNAMIC EDITION
 * 
 * FIXES:
 * 1. Flashing old text: We now hide the title instantly upon section change.
 * 2. Smoother text transitions.
 */
export function FloatingTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const currentTitleRef = useRef<string>("");
  const activeAnchorRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    if (!titleEl) return;

    const timer = setTimeout(() => {
      const sections = Array.from(document.querySelectorAll(".section-with-title")) as HTMLElement[];
      const anchors = Array.from(document.querySelectorAll(".title-anchor")) as HTMLElement[];
      
      if (sections.length === 0 || anchors.length === 0) return;

      // --- MASTER X-AXIS TIMELINE: ZIG-ZAG TRAVEL ---
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });

      sections.forEach((section, index) => {
        const align = section.getAttribute("data-align");

        let tx = "50vw";
        let px = -50;
        if (align === "left") { tx = "15vw"; px = 0; }
        else if (align === "right") { tx = "85vw"; px = -100; }

        masterTL.to(titleEl, {
          left: tx,
          xPercent: px,
          scale: 1,
          duration: 1,
          ease: "power2.inOut",
        });
        
        if (index < sections.length - 1) {
          masterTL.to(titleEl, {
             scale: 0.9,
             duration: 0.4
          });
        }
      });

      // --- PER-SECTION STATE UPDATES ---
      sections.forEach((section, i) => {
        const anchor = anchors[i];
        if (!anchor) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
             if (self.isActive) {
                activeAnchorRef.current = anchor;
                
                const isHero = section.id === "home";
                if (isHero) {
                   gsap.set(titleEl, { opacity: 0, visibility: "hidden" });
                } else {
                   // Ensure it's hidden before updating text to prevent flash
                   const newText = section.getAttribute("data-title");
                   if (newText !== currentTitleRef.current) {
                      gsap.set(titleEl, { opacity: 0, filter: "blur(12px)", scale: 0.9 });
                      updateText(newText);
                   } else {
                      gsap.to(titleEl, { opacity: 1, visibility: "visible", duration: 0.3 });
                   }
                }
             }
          }
        });
      });

      // --- DYNAMIC POSITION SYNC (TICKER) ---
      function onTick() {
        if (activeAnchorRef.current && titleEl) {
          const rect = activeAnchorRef.current.getBoundingClientRect();
          gsap.set(titleEl, { y: rect.top });
        }
      }
      gsap.ticker.add(onTick);

      function updateText(newText: string | null) {
        if (!newText || !titleEl) return;
        
        // Instant update if hidden, or animate
        titleEl.textContent = newText;
        currentTitleRef.current = newText;

        gsap.to(titleEl, {
          opacity: 1,
          visibility: "visible",
          filter: "blur(0px)",
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.1 // Small delay for the movement to start
        });
      }

      return () => {
         gsap.ticker.remove(onTick);
         ScrollTrigger.getAll().forEach(st => st.kill());
      };
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <h1
      ref={titleRef}
      className="fixed left-0 top-0 z-[100] pointer-events-none font-heading font-extrabold tracking-tighter"
      style={{
        fontSize: "clamp(2rem, 7.5vw, 5rem)",
        lineHeight: 1,
        willChange: "transform, opacity, filter",
        color: "hsl(var(--primary))", 
        opacity: 0,
        visibility: "hidden"
      }}
    />
  );
}
