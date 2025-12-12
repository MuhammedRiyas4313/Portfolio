import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience", icon: Zap },
  { value: "50+", label: "Projects Delivered", icon: Rocket },
  { value: "15+", label: "Happy Clients", icon: Users },
  { value: "10+", label: "Technologies", icon: Code2 },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
            Crafting Digital
            <span className="gradient-text"> Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a passionate Full Stack Developer specializing in the MERN stack with expertise in building 
            scalable web and mobile applications. From e-commerce platforms to freelance marketplaces, 
            I bring ideas to life with clean code and intuitive design.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-hover p-6 md:p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With a strong foundation in software development and a proactive learning mindset, 
                I have successfully delivered diverse projects including e-commerce applications, 
                health platforms, social networking sites, and content management systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am committed to delivering high-quality, user-centric solutions and actively 
                seeking opportunities to contribute and grow in dynamic development environments.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">What I Bring</h3>
              <ul className="space-y-3">
                {[
                  "Expertise in React.js, Next.js, and React Native",
                  "Backend proficiency with Node.js & Express.js",
                  "Experience with both RESTful and GraphQL APIs",
                  "Cloud deployment on AWS, DigitalOcean, Vercel",
                  "Agile methodology & collaborative mindset",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
