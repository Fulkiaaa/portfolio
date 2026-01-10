import { ChevronDown, Mail, User } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

type Props = {
  onCtaProjects: () => void;
  onCtaContact: () => void;
  onScrollNext: () => void;
};

export default function Hero({
  onCtaProjects,
  onCtaContact,
  onScrollNext,
}: Props) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection animation="scaleIn" delay={300}>
          <div className="mb-8 relative">
            <div
              className="w-32 h-32 mx-auto rounded-full shadow-neumorphism-large flex items-center justify-center mb-8"
              style={{ backgroundColor: "#f5efe6" }}
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#ff923e" }}
              >
                <User className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={500}>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: "#091433" }}
          >
            Clara
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={700}>
          <h2
            className="text-2xl md:text-3xl mb-8"
            style={{ color: "#ff923e" }}
          >
            Développeuse Web Full-Stack
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={900}>
          <p
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#091433" }}
          >
            Passionnée par la création d'applications web modernes et
            performantes. Je transforme vos idées en solutions web innovantes et
            sur mesure.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={1100}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={onCtaProjects}
              className="px-8 py-4 rounded-xl font-semibold text-white
             transition-all duration-300 ease-out
             shadow-neumorphism-orange
             hover:shadow-neumorphism-orange-inset
             hover:brightness-95
             active:scale-95"
              style={{ backgroundColor: "#ff923e" }}
            >
              Voir mes projets
            </button>
            <button
              onClick={onCtaContact}
              className="px-8 py-4 rounded-xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              style={{ backgroundColor: "#f5efe6", color: "#091433" }}
            >
              <Mail className="w-5 h-5" />
              Contactez-moi
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={1300}>
          <button
            onClick={onScrollNext}
            className="animate-bounce p-3 rounded-full shadow-neumorphism"
            style={{ backgroundColor: "#f5efe6" }}
          >
            <ChevronDown className="w-6 h-6" style={{ color: "#091433" }} />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
