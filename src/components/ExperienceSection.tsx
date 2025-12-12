import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Credot LLP",
    location: "Calicut, Kerala",
    period: "Dec 2024 - Present",
    description: [
      "Developed responsive web applications using React.js, Next.js, Tailwind CSS, and Material UI",
      "Built cross-platform mobile applications using React Native for Android and iOS",
      "Integrated RESTful and GraphQL APIs using Node.js and Express.js",
      "Deployed applications using NGINX, Apache, and DigitalOcean Droplets",
      "Leveraged CI/CD pipelines with Jenkins for automated deployment",
    ],
    projects: ["E-Commerce Applications", "Freelance Platform", "Multi-Sport Tournament Platform"],
  },
  {
    title: "Full Stack Developer (MERN)",
    company: "Ebslon Infotech",
    location: "NSP, Delhi",
    period: "Oct 2023 - Nov 2024",
    description: [
      "Developed high-performance React.js and Next.js applications with responsive interfaces",
      "Maintained cross-platform mobile applications using React Native",
      "Optimized frontend performance using code-splitting, lazy loading, and memoization",
      "Collaborated within Agile Scrum teams and managed tasks using Zoho Projects",
      "Ensured code quality through rigorous reviews and comprehensive testing with Jest",
    ],
    projects: ["E-Commerce Apps", "Health & Fitness Platforms", "Social Networking Sites", "CMS"],
  },
  {
    title: "MERN Stack Developer Intern",
    company: "Brototype",
    location: "Kozhikode, Kerala",
    period: "Sep 2022 - Sep 2023",
    description: [
      "Developed front-end applications using React.js, HTML, CSS, JavaScript, and Tailwind CSS",
      "Built back-end services using Node.js and Express.js",
      "Worked with MongoDB using Mongoose ORM for data management",
    ],
    projects: ["E-Commerce Platform", "Gym Management System"],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Career Path</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0
                      ? "left-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2"
                      : "left-0 -translate-x-1/2 md:left-0 md:-translate-x-1/2"
                  }`}
                />

                <div
                  className={`glass-card-hover p-6 md:p-8 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Header */}
                  <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 className="font-heading text-xl font-bold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-2 text-primary font-medium flex-wrap justify-start md:justify-end">
                      {index % 2 !== 0 && <Briefcase className="w-4 h-4 hidden md:block" />}
                      <span>{exp.company}</span>
                      {index % 2 === 0 && <Briefcase className="w-4 h-4 hidden md:block" />}
                    </div>
                    <div className={`flex items-center gap-4 mt-2 text-sm text-muted-foreground flex-wrap ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        {index % 2 !== 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />}
                        <span>{item}</span>
                        {index % 2 === 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 hidden md:block md:order-first" />}
                      </li>
                    ))}
                  </ul>

                  {/* Projects */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.projects.map((project) => (
                      <span
                        key={project}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
