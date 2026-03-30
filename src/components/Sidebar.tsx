import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Wrench,
  Briefcase,
  FolderOpen,
  Mail,
} from "lucide-react";

const navItems = [
  { id: "home",       label: "Home",       icon: Home },
  { id: "about",      label: "About",      icon: User },
  { id: "skills",     label: "Skills",     icon: Wrench },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects",   label: "Projects",   icon: FolderOpen },
  { id: "contact",    label: "Contact",    icon: Mail },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-10% 0px -10% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollTotal) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex"
    >
      {/* Pill container */}
      <div
        className="relative flex flex-col items-center gap-2 px-3 py-4 rounded-3xl
          border border-white/10 shadow-2xl
          bg-white/5 dark:bg-black/20 backdrop-blur-xl group overflow-hidden"
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)" }}
      >
        {/* Progress indicator line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20 pointer-events-none" />
        <motion.div
           className="absolute left-0 top-0 w-[2px] bg-primary pointer-events-none"
           style={{ height: `${scrollProgress}%` }}
        />
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.button
                onClick={() => scrollTo(item.id)}
                aria-label={item.label}
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                  ${isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebarActive"
                    className="absolute inset-0 rounded-xl bg-primary"
                    style={{ boxShadow: "0 0 20px var(--primary)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-[18px] h-[18px] relative z-10" />
              </motion.button>

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: -8, scale: 0.92 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -8, scale: 0.92 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-[calc(100%+12px)] whitespace-nowrap"
                  >
                    <span
                      className="px-3 py-1.5 rounded-lg text-xs font-medium
                        bg-foreground text-background shadow-lg"
                    >
                      {item.label}
                    </span>
                    {/* Arrow */}
                    <span
                      className="absolute right-full top-1/2 -translate-y-1/2
                        border-4 border-transparent border-r-foreground"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.aside>
  );
}
