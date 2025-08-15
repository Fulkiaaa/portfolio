import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="slideUp">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: "#091433" }}
          >
            Contactez-moi
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection animation="slideLeft" delay={200}>
            <div>
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#ff923e" }}
              >
                Discutons de votre projet web
              </h3>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "#091433" }}
              >
                Je suis toujours à la recherche de nouveaux défis et
                d'opportunités passionnantes dans le développement web.
                N'hésitez pas à me contacter pour discuter de votre projet.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                    value: "clara@example.com",
                  },
                  {
                    icon: <Github className="w-5 h-5" />,
                    label: "GitHub",
                    value: "github.com/Fulkiaaa",
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                    value: "linkedin.com/in/clara",
                  },
                ].map((contact, index) => (
                  <AnimatedSection
                    key={index}
                    animation="slideLeft"
                    delay={400 + index * 100}
                  >
                    <div
                      className="p-4 rounded-2xl shadow-neumorphism flex items-center gap-4"
                      style={{ backgroundColor: "#f5efe6" }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl shadow-neumorphism-small flex items-center justify-center"
                        style={{ backgroundColor: "#ff923e" }}
                      >
                        <div className="text-white">{contact.icon}</div>
                      </div>
                      <div>
                        <div
                          className="font-semibold"
                          style={{ color: "#091433" }}
                        >
                          {contact.label}
                        </div>
                        <div className="text-sm" style={{ color: "#ff923e" }}>
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={300}>
            <div
              className="p-8 rounded-3xl shadow-neumorphism"
              style={{ backgroundColor: "#f5efe6" }}
            >
              <form className="space-y-6">
                <AnimatedSection animation="slideUp" delay={500}>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full p-4 rounded-2xl shadow-neumorphism-inset border-none outline-none"
                    style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideUp" delay={600}>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full p-4 rounded-2xl shadow-neumorphism-inset border-none outline-none"
                    style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideUp" delay={700}>
                  <textarea
                    placeholder="Votre message"
                    rows={5}
                    className="w-full p-4 rounded-2xl shadow-neumorphism-inset border-none outline-none resize-none"
                    style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                  />
                </AnimatedSection>
                <AnimatedSection animation="slideUp" delay={800}>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300 font-semibold text-white"
                    style={{ backgroundColor: "#ff923e" }}
                  >
                    Envoyer le message
                  </button>
                </AnimatedSection>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
