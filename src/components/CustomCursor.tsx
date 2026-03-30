import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/30 pointer-events-none z-[9999] hidden md:block"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: "-50%",
          y: "-50%",
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "hsl(var(--primary) / 0.1)" : "transparent",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          x: "-50%",
          y: "-50%",
        }}
      />
    </>
  );
}
