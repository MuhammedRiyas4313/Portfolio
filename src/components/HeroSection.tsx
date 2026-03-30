import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ExternalLink, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Phone,    label: "+91 9544441589",                       href: "tel:+919544441589" },
  { icon: Mail,     label: "muhammedriyasp007@gmail.com",           href: "mailto:muhammedriyasp007@gmail.com" },
  { icon: MapPin,   label: "Kerala, India",                        href: "#" },
  { icon: Linkedin, label: "LinkedIn",                             href: "https://www.linkedin.com/in/muhammed-riyas-938a87256/" },
  { icon: Github,   label: "GitHub",                               href: "https://github.com/MuhammedRiyas4313" },
];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = ["Full Stack Developer", "MERN Stack Developer", "React Native Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(120);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations for sub-elements
      const tl = gsap.timeline({ delay: 0.2 });
      
      tl.from([headingRef.current, subRef.current, contactsRef.current, ctaRef.current], {
        opacity: 0,
        y: 30,
        filter: "blur(12px)",
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Subtle parallax on background blobs
      gsap.to(".hero-blob", {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      data-title="Muhammed Riyas"
      data-align="center"
      className="section-with-title relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-blob absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="hero-blob absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(98,129,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(98,129,65,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 md:pl-24 relative z-10 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name - TWO COLORS, BIG SCALE */}
          <h1
            ref={headingRef}
            className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-bold mb-6 tracking-tighter leading-[0.9]"
          >
            <span className="text-foreground">Muhammed</span>
            <br />
            <span className="gradient-text drop-shadow-2xl">Riyas</span>
          </h1>

          {/* Title Anchor Container - FOR MEASUREMENT ONLY (Keep hidden but in position) */}
          <div className="title-anchor h-0 absolute opacity-0" />

          {/* Typing role / Subtitle */}
          <div ref={subRef} className="mb-10">
            <span className="text-xl md:text-3xl text-muted-foreground font-medium min-h-[1.5em] flex items-center justify-center gap-1">
              {displayText}
              <span className="w-[3px] h-8 bg-primary rounded-full animate-pulse ml-1" />
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm md:text-base text-muted-foreground/85">
              {["Full Stack", "MERN & React Native Expert", "AI Solutions Architect", "3+ Years Experience"].map((item, i) => (
                <span key={item} className="flex items-center gap-3">
                  {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />}
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Badges */}
          <div ref={contactsRef} className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                  border border-border/50 bg-secondary/15 backdrop-blur-sm
                  text-sm font-medium hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="text-primary group-hover:scale-110 transition-transform">
                  <info.icon className="w-4 h-4" />
                </div>
                <span className="max-w-[150px] truncate sm:max-w-none">{info.label}</span>
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-95 transition-all glow-effect"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-secondary border border-border/50 font-semibold flex items-center justify-center gap-2 hover:bg-secondary/80 transition-all"
            >
              View Projects
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
