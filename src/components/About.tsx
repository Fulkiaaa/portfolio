import { AnimatedSection } from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="slideUp">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: "#091433" }}
          >
            À propos de moi
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideLeft" delay={200}>
            <div>
              <div
                className="p-8 rounded-3xl shadow-neumorphism"
                style={{ backgroundColor: "#f5efe6" }}
              >
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#ff923e" }}
                >
                  Mon parcours
                </h3>
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: "#091433" }}
                >
                  À 21 ans, je suis une développeuse web full-stack passionnée,
                  spécialisée dans la création d'applications web modernes et
                  performantes. Mon expertise couvre l'ensemble du développement
                  web, du frontend au backend.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#091433" }}
                >
                  J'aime créer des expériences utilisateur intuitives et des
                  architectures robustes. Mon approche combine innovation
                  technique et design soigné pour livrer des solutions web de
                  qualité professionnelle.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={400}>
            <div className="space-y-6">
              {[
                { label: "Expérience", value: "4+ années" },
                { label: "Projets réalisés", value: "20+" },
                { label: "Technologies maîtrisées", value: "20+" },
              ].map((stat, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideLeft"
                  delay={600 + index * 100}
                >
                  <div
                    className="p-6 rounded-2xl shadow-neumorphism flex justify-between items-center"
                    style={{ backgroundColor: "#f5efe6" }}
                  >
                    <span
                      className="text-lg font-semibold"
                      style={{ color: "#091433" }}
                    >
                      {stat.label}
                    </span>
                    <span
                      className="text-xl font-bold"
                      style={{ color: "#ff923e" }}
                    >
                      {stat.value}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
