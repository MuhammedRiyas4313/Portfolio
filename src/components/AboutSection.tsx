import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Rocket, Users, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "3+",  label: "Years Experience", icon: Zap },
  { value: "50+", label: "Projects Delivered", icon: Rocket },
  { value: "15+", label: "Happy Clients",     icon: Users },
  { value: "10+", label: "Technologies",       icon: Code2 },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main section title
      gsap.fromTo(".section-title", 
        { opacity: 0, y: 50, filter: "blur(6px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 0.9, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-title",
            start: "top 88%",
            toggleActions: "play none none reverse",
          }
        }
      );

      const items = gsap.utils.toArray<HTMLElement>(".about-reveal");
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 78%",
        onEnter: () => {
          gsap.fromTo(items, 
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.85, stagger: 0.11, ease: "power3.out" }
          );
        },
        once: true,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      data-title="About Me"
      data-align="left"
      className="section-with-title min-h-screen py-24 md:py-32 relative overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 md:pl-24 relative z-10 w-full">
        {/* Section Title */}
        <div className="max-w-4xl mb-16 text-left">
          <span className="about-reveal inline-block text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
            Crafting Digital Experiences
          </span>
          <h2 className="section-title font-heading text-5xl md:text-7xl font-bold tracking-tight mb-8">
            About <span className="text-primary italic">Me</span>
          </h2>
          <p className="about-reveal text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Passionate Full Stack Developer specializing in the MERN stack, building scalable web and mobile applications — from AI-powered chatbots to e-commerce platforms.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="about-reveal glass-card-hover p-6 md:p-8 text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About content card */}
        <div className="about-reveal glass-card p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With 3+ years of hands-on experience, I've delivered production-grade applications across diverse domains — e-commerce, freelance marketplaces, AI chatbots, tournament management systems, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently at Kiksy.ai, I architect WhatsApp Business API integrations handling 10,000+ daily messages, and build real-time AI dashboards with Angular & Node.js.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">What I Bring</h3>
              <ul className="space-y-3">
                {[
                  "Expert in React.js, Next.js, Angular & React Native",
                  "Robust Node.js backends with REST & GraphQL APIs",
                  "Cloud & DevOps: AWS, DigitalOcean, NGINX, Jenkins CI/CD",
                  "AI integrations: WhatsApp API, NLP, Chatbot pipelines",
                  "Agile mindset, clean code & mentoring culture",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
