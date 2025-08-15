import { AnimatedSection } from "./AnimatedSection";

export default function SiteFooter() {
  return (
    <AnimatedSection animation="fadeIn">
      <footer
        className="py-8 px-6 border-t border-opacity-20"
        style={{ borderColor: "#091433" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ color: "#091433" }}>
            © 2025 Clara - Développeuse Web. Tous droits réservés.
          </p>
        </div>
      </footer>
    </AnimatedSection>
  );
}
