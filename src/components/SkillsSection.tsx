import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Front-End Development",
    skills: ["React.js", "Next.js", "Redux", "Redux Toolkit", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Material UI", "Bootstrap", "Sass"],
  },
  {
    title: "Back-End Development",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "API Integration"],
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Cross-Platform Apps", "Android", "iOS"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Mongoose ORM"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "DigitalOcean", "Vercel", "NGINX", "Apache", "CI/CD", "Jenkins"],
  },
  {
    title: "Tools & Methodologies",
    skills: ["Git", "GitHub", "JIRA", "Zoho", "Scrum", "Jest", "Swagger", "Postman"],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">My Expertise</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card-hover p-6 md:p-8"
            >
              <h3 className="font-heading text-lg font-semibold mb-5 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary/80 text-foreground border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
