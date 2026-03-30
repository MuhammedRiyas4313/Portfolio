import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Code2, ShoppingCart, Users, Trophy, HeartPulse, Newspaper, Settings, Bot } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI Chatbot Platform",
    description: "WhatsApp Business API integration with real-time message processing, intelligent conversational flows & Meta Business Dashboard management for AI-powered customer engagement.",
    icon: Bot,
    tech: ["Node.js", "WhatsApp API", "Angular", "NLP", "Meta API"],
    color: "from-primary/30 to-primary/10",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce app with payment gateway integration, user authentication, shopping cart, order management and search/filter system.",
    icon: ShoppingCart,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind"],
    color: "from-emerald-500/25 to-teal-500/10",
  },
  {
    title: "Freelance Marketplace",
    description: "Platform connecting freelancers with clients — job postings, proposals, real-time messaging, secure payments and review systems.",
    icon: Users,
    tech: ["Next.js", "GraphQL", "PostgreSQL", "React Native"],
    color: "from-blue-500/25 to-cyan-500/10",
  },
  {
    title: "Multi-Sport Tournament",
    description: "Event management system for multiple sports with team registration, match scheduling, live scores, player stats and auction functionality.",
    icon: Trophy,
    tech: ["React.js", "Node.js", "MongoDB", "Material UI"],
    color: "from-orange-500/25 to-amber-500/10",
  },
  {
    title: "Health & Fitness Platform",
    description: "Doctor booking, trainer courses, live session scheduling and client tracking with mobile-first cross-platform experience.",
    icon: HeartPulse,
    tech: ["React Native", "Express.js", "MongoDB", "Redux"],
    color: "from-rose-500/25 to-pink-500/10",
  },
  {
    title: "Social Networking Apps",
    description: "Matrimony and news platforms with scalable architecture, infinite scroll, push notifications and engaging UX.",
    icon: Newspaper,
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    color: "from-violet-500/25 to-purple-500/10",
  },
  {
    title: "Gym Management System",
    description: "Fitness center management with separate trainer/client registrations, course uploads, progress tracking and live session scheduling.",
    icon: Settings,
    tech: ["React.js", "Express.js", "MongoDB", "Bootstrap"],
    color: "from-indigo-500/25 to-blue-500/10",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate Title
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

      // 2. Animate Cards
      const cards = gsap.utils.toArray<HTMLElement>(".proj-card");
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.75,
            delay: (i % 3) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:pl-24 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-16 max-w-4xl text-left">
          <span className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4 inline-block">
            Portfolio Showcase
          </span>
          <h2 className="section-title font-heading text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Featured <span className="text-primary italic">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Scalable web and mobile applications across diverse domains — building future-ready digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`proj-card group relative rounded-2xl overflow-hidden border border-border/50
                hover:border-primary/30 transition-all duration-300 cursor-default
                ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`h-28 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                {project.featured && (
                  <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-primary text-primary-foreground font-semibold">
                    Featured
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
                <project.icon className="w-11 h-11 text-foreground/80 group-hover:scale-110 transition-transform duration-500 relative z-10" />
              </div>

              <div className="p-5 bg-secondary/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Code2 className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-lg bg-background/70 text-muted-foreground border border-border/40 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/MuhammedRiyas4313"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-border/60
              bg-secondary/40 backdrop-blur-sm text-foreground font-medium text-sm
              hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
