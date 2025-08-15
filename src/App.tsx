import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsGrid from "./components/SkillsGrid";
import ProjectsGrid from "./components/ProjectsGrid";
import ContactForm from "./components/ContactForm";
import SiteFooter from "./components/SiteFooter";
import { useActiveSection } from "./hooks/useActiveSection";

export default function App() {
  const sections = [
    "hero",
    "about",
    "experience",
    "skills",
    "projects",
    "contact",
  ];
  const { active, scrollTo } = useActiveSection(sections);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5efe6" }}>
      <NavBar activeSection={active} onNavigate={scrollTo} />

      <Hero
        onCtaProjects={() => scrollTo("projects")}
        onCtaContact={() => scrollTo("contact")}
        onScrollNext={() => scrollTo("about")}
      />

      <About />
      <ExperienceTimeline />
      <SkillsGrid />
      <ProjectsGrid />
      <ContactForm />
      <SiteFooter />
    </div>
  );
}
