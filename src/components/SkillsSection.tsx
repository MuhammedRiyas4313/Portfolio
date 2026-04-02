import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  Globe,
  Layout,
  MessageSquare,
  Smartphone,
  Zap,
  Server,
  Cloud,
  Terminal,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    title: "Frontend Mastery",
    icon: Layout,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux-Toolkit"],
    accent: "text-blue-500",
  },
  {
    title: "Backend & AI",
    icon: Server,
    skills: ["Node.js", "Express.js", "GraphQL", "Python", "WhatsApp API"],
    accent: "text-emerald-500",
  },
  {
    title: "Mobile Solutions",
    icon: Smartphone,
    skills: ["React Native", "Expo", "Android/iOS", "App Arch", "Push Notifs"],
    accent: "text-purple-500",
  },
  {
    title: "Cloud & DevOops",
    icon: Cloud,
    skills: ["AWS", "DigitalOcean", "NGINX", "Docker", "Jenkins", "Git"],
    accent: "text-orange-500",
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate the main section title
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

      // 2. Animate the cards
      const items = gsap.utils.toArray<HTMLElement>(".skill-card");
      gsap.fromTo(items,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background blobs for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 md:pl-24 relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 text-left">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
            Technical Arsenal
          </span>
          <h2 className="section-title font-heading text-5xl md:text-7xl font-bold tracking-tight mb-8">
            My <span className="text-primary italic">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            A comprehensive toolkit built through 3+ years of architecting scalable applications and solving complex digital challenges.
          </p>
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card glass-card-hover p-8 group h-full">
              <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 
                group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 ${group.accent}`}>
                <group.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border/50 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra highlights */}
        <div className="mt-16 pt-16 border-t border-border/30">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Modern Standards</h4>
                <p className="text-sm text-muted-foreground">ESNext, Clean Code, Design Patterns, SOLID</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Performance</h4>
                <p className="text-sm text-muted-foreground">SEO, Web Vitals, API Caching, Lazy Loading</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Communication</h4>
                <p className="text-sm text-muted-foreground">Documentation, Agile, Mentoring, Code Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
