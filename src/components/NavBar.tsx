import { AnimatedSection } from "./AnimatedSection";

type Props = {
  activeSection: string;
  onNavigate: (id: string) => void;
};

const labels: Record<string, string> = {
  hero: "Accueil",
  about: "À propos",
  experience: "Expériences",
  skills: "Compétences",
  projects: "Projets",
  contact: "Contact",
};

export default function NavBar({ activeSection, onNavigate }: Props) {
  const sections = Object.keys(labels);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ backgroundColor: "rgba(245, 239, 230, 0.95)" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <AnimatedSection animation="slideRight" delay={100}>
          <a
            href="https://fulkiaaa.github.io/portfolio/"
            rel="noopener noreferrer"
            className="text-2xl font-bold"
            style={{ color: "#091433", textDecoration: "none" }}
          >
            Clara
          </a>
        </AnimatedSection>
        <AnimatedSection animation="slideLeft" delay={200}>
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeSection === section
                    ? "shadow-neumorphism-inset"
                    : "shadow-neumorphism hover:shadow-neumorphism-inset"
                }`}
                style={{
                  color: activeSection === section ? "#ff923e" : "#091433",
                  backgroundColor: "#f5efe6",
                }}
              >
                {labels[section]}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </nav>
  );
}
