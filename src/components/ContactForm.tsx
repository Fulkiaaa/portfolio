import {
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  XCircle,
  Lock,
  Send,
} from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkodjdz");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot anti-bot (champ caché)
  const [company, setCompany] = useState("");

  // Validation temps réel
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});

  const emailOk = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  const nameOk = (val: string) => val.trim().length >= 2;
  const messageOk = (val: string) => val.trim().length >= 10;

  type Field = "name" | "email" | "message";
  const validateField = (field: Field, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Le nom est requis.";
        if (!nameOk(value)) return "Minimum 2 caractères.";
        return;
      case "email":
        if (!value.trim()) return "L'email est requis.";
        if (!emailOk(value)) return "Format d'email invalide.";
        return;
      case "message":
        if (!value.trim()) return "Le message est requis.";
        if (!messageOk(value)) return "Minimum 10 caractères.";
        return;
    }
  };

  const validateAll = () => {
    const next = {
      name: validateField("name", name),
      email: validateField("email", email),
      message: validateField("message", message),
    };
    setErrors(next);
    return !next.name && !next.email && !next.message;
  };

  const showError = (field: Field) => touched[field] && !!errors[field];
  const showValid = (field: Field, value: string) =>
    touched[field] && !validateField(field, value);

  const onBlur = (field: Field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({
      ...e,
      [field]: validateField(field, { name, email, message }[field]),
    }));
  };

  const onChangeField =
    (field: Field) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const v = e.target.value;
      if (field === "name") setName(v);
      if (field === "email") setEmail(v);
      if (field === "message") setMessage(v);
      // Validation live uniquement après interaction
      setErrors((prev) => ({
        ...prev,
        [field]: touched[field] ? validateField(field, v) : prev[field],
      }));
    };

  const isValid =
    !validateField("name", name) &&
    !validateField("email", email) &&
    !validateField("message", message);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (company.trim().length > 0) return; // honeypot

    setTouched({ name: true, email: true, message: true });
    if (!validateAll()) return;

    await handleSubmit(e);
  };

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
                    onClick={() => window.location.reload()}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={onSubmit} noValidate>
                  {/* Header du formulaire */}
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
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        required
                        value={name}
                        onChange={onChangeField("name")}
                        onBlur={onBlur("name")}
                        aria-invalid={showError("name")}
                        aria-describedby="err-name"
                        className={`w-full p-4 pr-11 rounded-2xl shadow-neumorphism-inset border outline-none
                          ${
                            showError("name")
                              ? "border-[#091433]"
                              : showValid("name", name)
                              ? "border-[#ff923e]"
                              : "border-transparent"
                          }`}
                        style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                      />
                      {showError("name") && (
                        <XCircle
                          color="#091433"
                          className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
                          aria-hidden
                        />
                      )}
                      {showValid("name", name) && (
                        <CheckCircle
                          color="#ff923e"
                          className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
                          aria-hidden
                        />
                      )}
                      {showError("name") && (
                        <p
                          id="err-name"
                          role="alert"
                          aria-live="polite"
                          className="mt-1 text-sm"
                          style={{ color: "#091433" }}
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </AnimatedSection>

                  {/* Email */}
                  <AnimatedSection animation="slideUp" delay={600}>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        required
                        value={email}
                        onChange={onChangeField("email")}
                        onBlur={onBlur("email")}
                        aria-invalid={showError("email")}
                        aria-describedby="err-email"
                        className={`w-full p-4 pr-11 rounded-2xl shadow-neumorphism-inset border outline-none
                          ${
                            showError("email")
                              ? "border-[#091433]"
                              : showValid("email", email)
                              ? "border-[#ff923e]"
                              : "border-transparent"
                          }`}
                        style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                      />
                      {showError("email") && (
                        <XCircle
                          color="#091433"
                          className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
                          aria-hidden
                        />
                      )}
                      {showValid("email", email) && (
                        <CheckCircle
                          color="#ff923e"
                          className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
                          aria-hidden
                        />
                      )}
                      {showError("email") && (
                        <p
                          id="err-email"
                          role="alert"
                          aria-live="polite"
                          className="mt-1 text-sm"
                          style={{ color: "#091433" }}
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </AnimatedSection>

                  {/* Message */}
                  <AnimatedSection animation="slideUp" delay={700}>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Votre message"
                        rows={5}
                        required
                        value={message}
                        onChange={onChangeField("message")}
                        onBlur={onBlur("message")}
                        aria-invalid={showError("message")}
                        aria-describedby="err-message"
                        className={`w-full p-4 pr-11 rounded-2xl shadow-neumorphism-inset border outline-none resize-none
                          ${
                            showError("message")
                              ? "border-[#091433]"
                              : showValid("message", message)
                              ? "border-[#ff923e]"
                              : "border-transparent"
                          }`}
                        style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                      />
                      {showError("message") && (
                        <XCircle
                          color="#091433"
                          className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
                          aria-hidden
                        />
                      )}
                      {showValid("message", message) && (
                        <CheckCircle
                          color="#ff923e"
                          className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
                          aria-hidden
                        />
                      )}
                      {showError("message") && (
                        <p
                          id="err-message"
                          role="alert"
                          aria-live="polite"
                          className="mt-1 text-sm"
                          style={{ color: "#091433" }}
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </AnimatedSection>

                  {/* Tu peux passer des champs cachés pour personnaliser l'email */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="📮 Nouveau message portfolio"
                  />

                  <AnimatedSection animation="slideUp" delay={800}>
                    <button
                      type="submit"
                      disabled={state.submitting || !isValid}
                      aria-busy={state.submitting}
                      aria-label={
                        !isValid ? "Formulaire incomplet" : "Envoyer le message"
                      }
                      className={[
                        "w-full py-4 rounded-2xl shadow-neumorphism transition-all duration-300 font-semibold text-white",
                        // hover UNIQUEMENT si valide
                        isValid && !state.submitting
                          ? "hover:shadow-neumorphism-inset"
                          : "",
                        // en bonus: pas d'interactions quand disabled
                        "disabled:cursor-not-allowed disabled:pointer-events-none",
                      ].join(" ")}
                      style={{ backgroundColor: "#ff923e" }}
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        {!state.submitting && !isValid && (
                          <Lock className="w-5 h-5" aria-hidden />
                        )}
                        {!state.submitting && isValid && (
                          <Send className="w-5 h-5" aria-hidden />
                        )}
                        {state.submitting ? "Envoi..." : "Envoyer le message"}
                      </span>
                    </button>
                  </AnimatedSection>

                  {/* Note confiance + erreurs serveur Formspree */}
                  <div
                    className="text-xs mt-2 text-center opacity-70"
                    style={{ color: "#091433" }}
                  >
                    Vos informations ne seront utilisées que pour vous répondre.
                  </div>
                  <ValidationError
                    prefix="Formulaire"
                    field="form"
                    errors={state.errors}
                  />
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
