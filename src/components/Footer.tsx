import { Heart, Github, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/40 relative">
      <div className="container mx-auto px-6 md:pl-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-heading text-2xl font-bold gradient-text select-none"
          >
            MR<span className="text-primary">.</span>
          </button>

          {/* Links */}
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            {["about", "skills", "experience", "projects", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => document.getElementById(s)?.scrollIntoView({ behavior: "smooth" })}
                className="capitalize hover:text-primary transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Social + Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MuhammedRiyas4313"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed-riyas-938a87256/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 fill-primary text-primary" /> by Muhammed Riyas · © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
