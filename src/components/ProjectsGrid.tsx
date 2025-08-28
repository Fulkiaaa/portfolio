import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { projects } from "../data/projects";

export default function ProjectsGrid() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="slideUp">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: "#091433" }}
          >
            Mes projets
          </h2>
        </AnimatedSection>

        <div className="grid auto-rows-[1fr] md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {visibleProjects.map((project, index) => (
            <AnimatedSection
              key={index} // idéalement un id unique si dispo
              animation="slideUp"
              delay={200 + index * 100}
            >
              <div
                className="h-full min-h-[520px] md:min-h-[520px] flex flex-col rounded-3xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300 overflow-hidden group"
                style={{ backgroundColor: "#f5efe6" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#091433" }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex-1">
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "#091433" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-lg text-xs shadow-neumorphism-small"
                          style={{
                            backgroundColor: "#f5efe6",
                            color: "#ff923e",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-white transition-all duration-300 ease-out shadow-neumorphism-orange hover:shadow-neumorphism-orange-inset hover:brightness-95 active:scale-95"
                    style={{ backgroundColor: "#ff923e" }}
                  >
                    Voir sur GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bouton Voir plus / Voir moins */}
        {projects.length > 6 && (
          <AnimatedSection animation="slideUp" delay={200}>
            <div className="flex justify-center mt-10">
              <button
                type="button"
                aria-expanded={showAll}
                onClick={() => setShowAll((v) => !v)}
                className="px-5 py-3 rounded-xl font-semibold text-white shadow-neumorphism-orange hover:shadow-neumorphism-orange-inset transition-all duration-300 active:scale-95"
                style={{ backgroundColor: "#ff923e" }}
              >
                {showAll ? "Voir moins" : "Voir plus"}
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
