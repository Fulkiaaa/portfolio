import { AnimatedSection } from "./AnimatedSection";
import { skills } from "../data/skills";

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

        <div className="grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <AnimatedSection
                key={index}
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
                    {skill.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="px-3 py-2 rounded-lg text-center text-sm shadow-neumorphism-small"
                        style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                      >
                        {tech}
                      </div>
                    ))}
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
