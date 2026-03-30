import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
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

      // 2. Animate items
      const items = gsap.utils.toArray<HTMLElement>(".contact-reveal");
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(items, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out" }
          );
        },
        once: true,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-6 md:pl-24 relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Info side */}
            <div>
              <div className="mb-12">
                <span className="contact-reveal inline-block text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
                  Get In Touch
                </span>
                <h2 className="section-title font-heading text-5xl md:text-7xl font-bold tracking-tight mb-8">
                  Let's Build <span className="text-primary italic">Together</span>
                </h2>
                <p className="contact-reveal text-lg text-muted-foreground leading-relaxed max-w-md">
                  I'm always open to discussing new projects, creative ideas or original digital solutions.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "muhammedriyasp007@gmail.com", href: "mailto:muhammedriyasp007@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 9544441589", href: "tel:+919544441589" },
                  { icon: MapPin, label: "Location", value: "Kerala, India", href: "#" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="contact-reveal group flex items-center gap-6 p-4 rounded-xl border border-border/50 bg-secondary/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="font-bold">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-12 flex items-center gap-4">
                <a
                  href="https://github.com/MuhammedRiyas4313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-reveal w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammed-riyas-938a87256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-reveal w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Form side side */}
            <div className="contact-reveal glass-card p-8 md:p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               
               <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                    <input type="text" placeholder="How can I help?" className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                    <textarea rows={4} placeholder="Your message here..." className="w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-all resize-none" />
                  </div>
                  <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
