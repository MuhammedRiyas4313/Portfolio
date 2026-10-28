import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Senior Developer",
    company: "Digitide Solutions Ltd",
    companyFull: "Digitide Solutions Ltd",
    location: "Bengaluru, Karnataka",
    period: "May 2026 – Present",
    type: "Current",
    description: [
      "Working on an Insurance Claim Automation System, building the web application and backend services that automate insurance claim workflows",
      "Develop and maintain frontend interfaces using React.js",
      "Design and build backend APIs using Node.js and Express.js",
      "Implement workflow automation using jBPM to model and run business processes",
      "Integrate backend services with SQL and MongoDB databases",
      "Deploy and manage the application on Contabo-hosted infrastructure",
      "Debug and resolve issues across the frontend, backend, and workflow layers",
      "Use Claude for AI-assisted development, including code generation and debugging support",
      "Track tasks and collaborate with the team using Jira",
    ],
    tags: ["React.js", "Node.js", "Express.js", "jBPM", "MongoDB", "SQL", "Jira"],
    accent: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Full Stack Developer",
    company: "Kiksar Technologies",
    companyFull: "Kiksar Technologies",
    location: "Bengaluru, Karnataka",
    period: "Aug 2025 – Apr 2026",
    type: "Full-time",
    description: [
      "Architected WhatsApp Business API webhook integration achieving 95%+ uptime, handling 10,000+ daily messages",
      "Designed intelligent conversational flows with dynamic routing — endpoint-driven and standalone configurations",
      "Configured Meta Business Dashboard for automated engagement: webhooks, templates, verification, analytics",
      "Built AI calling dashboard (Angular + Node.js) with real-time call analytics, live metrics & call log management",
      "Leveraged Antigravity AI editor to accelerate dev velocity by 40% via intelligent suggestions & auto-refactoring",
      "Implemented error handling & monitoring systems reducing chatbot failure rates by 60%, delivery success to 98%",
      "Optimized webhook response times to under 100ms via smart DB queries and caching strategies",
      "Collaborated with AI/ML team to integrate NLP for enhanced chatbot intelligence",
    ],
    tags: ["React.js", "Next.js", "Express.js", "MongoDb", "Node.js",],
    accent: "from-primary/20 to-primary/5",
  },
  {
    title: "Senior Software Developer",
    company: "Credot LLP",
    companyFull: "Credot LLP",
    location: "Calicut, Kerala",
    period: "Dec 2024 – Aug 2025",
    type: "Full-time",
    description: [
      "Architected 3+ production apps: e-commerce, freelance marketplace & multi-sport tournament system — 1000+ users",
      "Engineered React Native apps with 95%+ code reusability across iOS and Android",
      "Enhanced frontend performance by 40% through code-splitting, lazy loading & Redux-Saga patterns",
      "Designed scalable REST & GraphQL APIs handling 10,000+ daily requests with sub-200ms response times",
      "Deployed on Apache, NGINX & DigitalOcean Droplets with zero-downtime strategies (99.9% uptime)",
      "Optimized MongoDB & PostgreSQL schemas improving query performance by 50%",
      "Established Jenkins CI/CD pipelines cutting deployment time from 2 hours to 15 minutes (85% faster)",
      "Led code reviews and mentored junior developers improving team code quality by 35%",
    ],
    tags: ["React.js", "React Native", "Node.js", "GraphQL", "Jenkins"],
    accent: "from-blue-500/15 to-blue-500/5",
  },
  {
    title: "Full Stack Developer",
    company: "Ebslon Infotech",
    companyFull: "Ebslon Infotech",
    location: "NSP, Delhi",
    period: "Oct 2023 – Nov 2024",
    type: "Full-time",
    description: [
      "Developed React.js and Next.js applications with responsive architecture, improving page load times by 35%",
      "Built cross-platform React Native apps ensuring seamless performance on Android & iOS",
      "Optimized frontend via code-splitting, lazy loading, memoization with Redux & React Context",
      "Integrated payment gateways, auth services & third-party APIs for seamless data exchange",
      "Collaborated in Agile Scrum teams, managing tasks via Zoho Projects",
      "Implemented Jest testing framework achieving 80%+ code coverage, reducing production bugs by 50%",
      "Delivered diverse solutions: e-commerce, health/fitness systems, social networks & CMS applications",
    ],
    tags: ["Next.js", "React Native", "Redux", "Jest"],
    accent: "from-purple-500/15 to-purple-500/5",
  },
  {
    title: "Junior MERN Stack Developer",
    company: "Brototype",
    companyFull: "Brototype",
    location: "Kozhikode, Kerala",
    period: "Sep 2022 – Sep 2023",
    type: "Full-time",
    description: [
      "Built front-end apps using React.js, HTML, CSS, JavaScript, Bootstrap & Tailwind CSS",
      "Developed back-end services with Node.js & Express.js for RESTful API development",
      "Worked with MongoDB using Mongoose ORM for schema definition & complex queries",
      "Built E-Commerce platform with product listings, authentication, cart, order management & secure checkout",
      "Developed Gym Management System with trainer/client registrations, course uploads & live session scheduling",
    ],
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind"],
    accent: "from-orange-500/15 to-orange-500/5",
  },
];

export function ExperienceSection() {
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
      const cards = gsap.utils.toArray<HTMLElement>(".exp-card");
      cards.forEach((card) => {
        const isLeft = card.classList.contains("md:justify-start");
        gsap.fromTo(card,
          { opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 },
          {
            opacity: 1, x: 0, scale: 1,
            duration: 0.8,
            ease: "power2.out",
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
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-6 md:pl-24 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-left mb-20 max-w-4xl">
          <span className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4 inline-block">
            Professional Career Path
          </span>
          <h2 className="section-title font-heading text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Work <span className="text-primary italic">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A track record of high-performance product delivery, ranging from AI startups to established software firms.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={exp.company}
                className={`exp-card relative mb-12 md:mb-16 flex ${isLeft ? "md:justify-start md:pr-[52%]" : "md:justify-end md:pl-[52%]"} pl-12 md:pl-0`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background shadow-md shadow-primary/40
                    left-4 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2`}
                />

                {/* Card content */}
                <div
                  className={`w-full rounded-2xl border border-border/50 overflow-hidden
                    bg-gradient-to-br ${exp.accent} backdrop-blur-sm
                    hover:border-primary/30 transition-all duration-300 group`}
                >
                  <div className="px-6 pt-6 pb-4 border-b border-border/30">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground">{exp.title}</h3>
                        <div className="flex items-center gap-1.5 mt-1 text-primary font-semibold text-sm">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      {exp.type === "Current" ? (
                        <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-emerald-500/40 text-emerald-400 bg-emerald-500/10 font-medium">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                          </span>
                          Current
                        </span>
                      ) : (
                        <span className="text-xs px-2.5 py-1 rounded-full border border-primary/30 text-primary bg-primary/10 font-medium">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-2.5 text-xs text-muted-foreground flex-wrap">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="px-6 py-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-6 pb-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-background/60 text-foreground border border-border/40 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
