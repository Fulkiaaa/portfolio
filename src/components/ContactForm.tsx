// ContactForm.tsx
import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkodjdz"); // <-- ton ID Formspree
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot anti-bot (champ caché)
  const [company, setCompany] = useState("");

  const succeeded = state.succeeded;

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
          {/* Colonne infos */}
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
                    href: "mailto:clara@example.com",
                  },
                  {
                    icon: <Github className="w-5 h-5" />,
                    label: "GitHub",
                    value: "github.com/Fulkiaaa",
                    href: "https://github.com/Fulkiaaa",
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                    value: "linkedin.com/in/clara",
                    href: "https://www.linkedin.com/in/clara-morin-14a166227/",
                  },
                ].map((contact, index) => (
                  <AnimatedSection
                    key={index}
                    animation="slideLeft"
                    delay={400 + index * 100}
                  >
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-2xl shadow-neumorphism flex items-center gap-4 transition-transform hover:scale-[1.02]"
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
                        <div
                          className="text-sm underline"
                          style={{ color: "#ff923e" }}
                        >
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Colonne formulaire */}
          <AnimatedSection animation="slideRight" delay={300}>
            <div
              className="p-8 rounded-3xl shadow-neumorphism"
              style={{ backgroundColor: "#f5efe6" }}
            >
              {/* État succès */}
              {succeeded ? (
                <div className="text-center space-y-4">
                  <h4
                    className="text-2xl font-bold"
                    style={{ color: "#091433" }}
                  >
                    Merci pour votre message ✅
                  </h4>
                  <p style={{ color: "#091433" }}>
                    Je reviens vers vous au plus vite.
                  </p>
                  <button
                    className="px-6 py-3 rounded-2xl shadow-neumorphism font-semibold text-white"
                    style={{ backgroundColor: "#ff923e" }}
                    onClick={() => {
                      // reset manuel si tu veux permettre un nouvel envoi
                      window.location.reload();
                    }}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  {/* === Header du formulaire (titre + sous-titre + icône) === */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-10 h-10 rounded-xl shadow-neumorphism-small flex items-center justify-center"
                        style={{ backgroundColor: "#ff923e" }}
                        aria-hidden
                      >
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4
                          className="text-xl font-bold"
                          style={{ color: "#091433" }}
                        >
                          Envoyez-moi un message
                        </h4>
                        <p
                          className="text-sm opacity-80"
                          style={{ color: "#091433" }}
                        >
                          Réponse sous 72 h • Pas de spam
                        </p>
                      </div>
                    </div>
                    <div
                      className="h-px w-full rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(9,20,51,0.06), rgba(9,20,51,0.12), rgba(9,20,51,0.06))",
                      }}
                    />
                  </div>

                  {/* Honeypot (caché des lecteurs d'écran & tab) */}
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Nom */}
                  <AnimatedSection animation="slideUp" delay={500}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 rounded-2xl shadow-neumorphism-inset border-none outline-none"
                      style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                      aria-label="Votre nom"
                    />
                    <ValidationError
                      prefix="Nom"
                      field="name"
                      errors={state.errors}
                    />
                  </AnimatedSection>

                  {/* Email */}
                  <AnimatedSection animation="slideUp" delay={600}>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 rounded-2xl shadow-neumorphism-inset border-none outline-none"
                      style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                      aria-label="Votre email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </AnimatedSection>

                  {/* Message */}
                  <AnimatedSection animation="slideUp" delay={700}>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Votre message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-4 rounded-2xl shadow-neumorphism-inset border-none outline-none resize-none"
                      style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                      aria-label="Votre message"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </AnimatedSection>

                  {/* Tu peux passer des champs cachés pour personnaliser l’email */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="📮 Nouveau message portfolio"
                  />

                  <AnimatedSection animation="slideUp" delay={800}>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full py-4 rounded-2xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300 font-semibold text-white disabled:opacity-60"
                      style={{ backgroundColor: "#ff923e" }}
                    >
                      {state.submitting ? "Envoi..." : "Envoyer le message"}
                    </button>
                  </AnimatedSection>

                  {/* Note confiance */}
                  <p
                    className="text-xs mt-2 text-center opacity-70"
                    style={{ color: "#091433" }}
                  >
                    Vos informations ne seront utilisées que pour vous répondre.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
