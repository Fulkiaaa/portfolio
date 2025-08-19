// SkillsGrid.tsx
import { AnimatedSection } from "./AnimatedSection";
import { skills } from "../data/skills";
import { ChevronDown } from "lucide-react";

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="slideUp">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: "#091433" }}
          >
            Mes compétences
          </h2>
        </AnimatedSection>

        {/* ====== Mobile: accordéons par catégorie (fermés par défaut) ====== */}
        <div className="md:hidden space-y-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <AnimatedSection
                key={`mobile-${index}`}
                animation="slideUp"
                delay={200 + index * 120}
              >
                <details
                  className="group rounded-3xl shadow-neumorphism transition-all duration-300 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                  style={{ backgroundColor: "#f5efe6" }}
                >
                  <summary
                    className="flex items-center gap-4 px-5 py-4 cursor-pointer select-none"
                    style={{ color: "#091433" }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl shadow-neumorphism-small flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#ff923e" }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="text-lg font-bold">{skill.name}</div>
                      <div
                        className="text-xs opacity-80"
                        style={{ color: "#091433" }}
                      >
                        {skill.technologies.length} technologies
                      </div>
                    </div>

                    <ChevronDown
                      className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>

                  {/* Contenu déplié */}
                  <div className="px-5 pb-5 pt-2">
                    <div className="grid gap-2">
                      {skill.technologies.map((tech: string, i: number) => (
                        <div
                          key={i}
                          className="px-3 py-2 rounded-lg text-center text-sm shadow-neumorphism-small"
                          style={{
                            backgroundColor: "#f5efe6",
                            color: "#091433",
                          }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </AnimatedSection>
            );
          })}
        </div>

        {/* ====== Desktop / Tablet: grille originale ====== */}
        <div className="hidden md:grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <AnimatedSection
                key={`desk-${index}`}
                animation="slideUp"
                delay={200 + index * 150}
              >
                <div
                  className="h-full flex flex-col p-6 rounded-3xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300"
                  style={{ backgroundColor: "#f5efe6" }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl shadow-neumorphism-small flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: "#ff923e" }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold text-center mb-4"
                    style={{ color: "#091433" }}
                  >
                    {skill.name}
                  </h3>
                  <div className="mt-4 grid gap-2 flex-1 content-start">
                    {skill.technologies.map(
                      (tech: string, techIndex: number) => (
                        <div
                          key={techIndex}
                          className="px-3 py-2 rounded-lg text-center text-sm shadow-neumorphism-small"
                          style={{
                            backgroundColor: "#f5efe6",
                            color: "#091433",
                          }}
                        >
                          {tech}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
