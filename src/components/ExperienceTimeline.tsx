import { Briefcase } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { experiences } from "../data/experiences";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="slideUp">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: "#091433" }}
          >
            Expériences professionnelles
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 w-px left-4 md:left-1/2 md:-translate-x-1/2 pointer-events-none"
            style={{ backgroundColor: "#09143320" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection
                  key={i}
                  animation={isLeft ? "slideLeft" : "slideRight"}
                  delay={200 + i * 150}
                >
                  <div className="relative grid md:grid-cols-2 gap-8 items-stretch">
                    <div className={`${isLeft ? "md:pr-12" : ""}`}>
                      {isLeft && <Card {...exp} />}
                    </div>

                    <div className={`${!isLeft ? "md:pl-12" : ""}`}>
                      {!isLeft && <Card {...exp} />}
                    </div>

                    {/* Pastilles */}
                    <div
                      className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 z-10"
                      aria-hidden="true"
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor: "#ff923e",
                          boxShadow: "0 0 0 6px rgba(255,146,62,0.2)",
                        }}
                      />
                    </div>
                    <div
                      className="md:hidden absolute top-8 left-4 z-10"
                      aria-hidden="true"
                    >
                      <div
                        className="w-3.5 h-3.5 rounded-full"
                        style={{
                          backgroundColor: "#ff923e",
                          boxShadow: "0 0 0 6px rgba(255,146,62,0.2)",
                        }}
                      />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card(exp: any) {
  return (
    <div
      className="p-6 rounded-3xl shadow-neumorphism h-full"
      style={{ backgroundColor: "#f5efe6" }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl shadow-neumorphism-small flex items-center justify-center"
          style={{ backgroundColor: "#ff923e" }}
        >
          <Briefcase className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold" style={{ color: "#091433" }}>
            {exp.role}
          </h3>
          <div className="text-sm" style={{ color: "#ff923e" }}>
            {exp.company} • {exp.location}
          </div>
        </div>
      </div>

      <div className="text-sm mb-4" style={{ color: "#091433" }}>
        {exp.period}
      </div>

      <ul className="grid gap-2 mb-4">
        {exp.points.map((p: string, idx: number) => (
          <li
            key={idx}
            className="px-2 py-1 rounded-lg shadow-neumorphism-small text-sm"
            style={{
              backgroundColor: "#f5efe6",
              color: "#091433",
              whiteSpace: "pre-line",
            }}
          >
            {p}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.tech.map((t: string, ti: number) => (
          <span
            key={ti}
            className="px-2 py-1 rounded-lg text-xs shadow-neumorphism-small"
            style={{ backgroundColor: "#f5efe6", color: "#ff923e" }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
