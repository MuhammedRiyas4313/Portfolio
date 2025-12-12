import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2, ShoppingCart, Users, Trophy, HeartPulse, Newspaper, Settings } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce application with payment gateway integration, user authentication, shopping cart, and order management system.",
    icon: ShoppingCart,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Freelance Marketplace",
    description: "Platform connecting freelancers with clients featuring job postings, proposals, secure messaging, and payment integration.",
    icon: Users,
    tech: ["Next.js", "GraphQL", "PostgreSQL", "React Native"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Multi-Sport Tournament",
    description: "Event management system for various sports with team registration, match scheduling, player statistics, and auction functionality.",
    icon: Trophy,
    tech: ["React.js", "Node.js", "MongoDB", "Material UI"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Health & Fitness Platform",
    description: "Doctor booking system with appointment scheduling, trainer courses, live sessions, and client tracking features.",
    icon: HeartPulse,
    tech: ["React Native", "Express.js", "MongoDB", "Redux"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Social Networking Apps",
    description: "Built matrimony and news reading platforms with scalable architecture for engaging user experiences.",
    icon: Newspaper,
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Gym Management System",
    description: "Web application for fitness centers with separate registrations for trainers and clients, course management, and session scheduling.",
    icon: Settings,
    tech: ["React.js", "Express.js", "MongoDB", "Bootstrap"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in building scalable web and mobile applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card-hover overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-shimmer" />
                <project.icon className="w-12 h-12 text-foreground/80 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Code2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/80 text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
