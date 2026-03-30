import { TopBar }          from "@/components/TopBar";
import { Sidebar }          from "@/components/Sidebar";
import { FloatingTitle }    from "@/components/FloatingTitle";
import { HeroSection }      from "@/components/HeroSection";
import { AboutSection }     from "@/components/AboutSection";
import { SkillsSection }    from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection }  from "@/components/ProjectsSection";
import { ContactSection }   from "@/components/ContactSection";
import { Footer }           from "@/components/Footer";
import { CustomCursor }     from "@/components/CustomCursor";
import { useLenis }         from "@/hooks/useLenis";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed UI chrome */}
      <TopBar />
      <Sidebar />
      <CustomCursor />

      {/* Page content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
