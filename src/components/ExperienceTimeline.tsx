// ExperienceTimeline.tsx
import { Briefcase, ChevronDown } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { experiences } from "../data/experiences";

// --- helpers pour grouper par année à partir de exp.period ---
function extractYears(period: string | undefined): {
  start?: number;
  end?: number;
} {
  if (!period) return {};
  const years = (period.match(/\d{4}/g) || []).map((y) => parseInt(y, 10));
  const hasPresent = /présent|present|aujourd'hui|today/i.test(period);
  if (years.length === 0) return {};
  const start = years[0];
  const end =
    years.length > 1
      ? years[years.length - 1]
      : hasPresent
      ? new Date().getFullYear()
      : years[0];
  return { start, end };
}

export default function ExperienceTimeline() {
  // === Mobile: groupage par année ===
  // Chaque item peut être assigné à plusieurs années si sa période couvre un range.
  const byYear: Record<string, any[]> = {};
  for (const exp of experiences) {
    // si tu as exp.year dans tes données, on le prend en priorité
    const explicitYear = (exp as any).year as number | undefined;

    if (explicitYear) {
      (byYear[explicitYear] ||= []).push(exp);
      continue;
    }

    const { start, end } = extractYears(exp.period);
    if (start && end) {
      for (let y = end; y >= start; y--) {
        (byYear[y] ||= []).push(exp);
      }
    } else if (start) {
      (byYear[start] ||= []).push(exp);
    } else {
      (byYear["Autres"] ||= []).push(exp);
    }
  }

  const yearKeys = Object.keys(byYear).sort((a, b) => {
    const na = parseInt(a, 10);
    const nb = parseInt(b, 10);
    // "Autres" en bas
    if (isNaN(na)) return 1;
    if (isNaN(nb)) return -1;
    return nb - na; // desc
  });

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

        {/* ====== Mobile: accordéons par année (fermés par défaut) ====== */}
        <div className="md:hidden relative space-y-4">
          {/* ligne timeline à gauche */}
          <div
            className="absolute top-0 bottom-0 w-px left-4 pointer-events-none"
            style={{ backgroundColor: "#09143320" }}
            aria-hidden
          />

          {yearKeys.map((year, yi) => (
            <AnimatedSection
              key={`y-${year}`}
              animation="slideUp"
              delay={200 + yi * 100}
            >
              <details
                className="group relative rounded-3xl shadow-neumorphism overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                style={{ backgroundColor: "#f5efe6" }}
              >
                {/* pastille pour le groupe année */}
                <div
                  className="absolute left-4 top-5 -translate-x-1/2 z-10"
                  aria-hidden
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{
                      backgroundColor: "#ff923e",
                      boxShadow: "0 0 0 6px rgba(255,146,62,0.2)",
                    }}
                  />
                </div>

                <summary
                  className="flex items-center gap-3 px-6 py-4 pl-8 cursor-pointer select-none"
                  style={{ color: "#091433" }}
                >
                  <div className="text-lg font-bold">{year}</div>
                  <div className="text-xs opacity-80">
                    {byYear[year].length} expérience(s)
                  </div>
                  <ChevronDown
                    className="ml-auto w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>

                <div className="px-6 pb-5 pt-1 pl-8 space-y-4">
                  {byYear[year].map((exp, i) => (
                    <div
                      key={`${year}-${i}`}
                      className="rounded-2xl shadow-neumorphism p-4"
                      style={{ backgroundColor: "#f5efe6" }}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div
                          className="w-10 h-10 rounded-xl shadow-neumorphism-small flex items-center justify-center shrink-0"
                          style={{ backgroundColor: "#ff923e" }}
                        >
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <div
                            className="font-bold leading-snug truncate"
                            style={{ color: "#091433" }}
                          >
                            {exp.role}
                          </div>
                          <div className="text-sm" style={{ color: "#ff923e" }}>
                            {exp.company} • {exp.location}
                          </div>
                          <div
                            className="text-xs mt-1 opacity-80"
                            style={{ color: "#091433" }}
                          >
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      <ul className="grid gap-2 mb-3">
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
                            style={{
                              backgroundColor: "#f5efe6",
                              color: "#ff923e",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </AnimatedSection>
          ))}
        </div>

        {/* ====== Desktop / Tablet: timeline alternée d'origine ====== */}
        <div className="relative hidden md:block">
          <div
            className="absolute top-0 bottom-0 w-px left-4 md:left-1/2 md:-translate-x-1/2 pointer-events-none"
            style={{ backgroundColor: "#09143320" }}
          />
          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection
                  key={`d-${i}`}
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

                    {/* Pastille */}
                    <div
                      className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 z-10"
                      aria-hidden
                    >
                      <div
                        className="w-4 h-4 rounded-full"
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
