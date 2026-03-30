import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function TopBar() {
  const scrollHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 h-16 pointer-events-none"
    >
      {/* Logo */}
      <motion.button
        onClick={scrollHome}
        className="pointer-events-auto font-heading text-2xl font-bold gradient-text select-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        MR<span className="text-primary">.</span>
      </motion.button>

      {/* Theme Toggle */}
      <div className="pointer-events-auto">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
