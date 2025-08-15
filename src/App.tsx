import React, { useState, useEffect } from "react";
import {
  Code,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Database,
  Globe,
  Server,
  Palette,
  Settings,
  Wrench,
} from "lucide-react";
import { AnimatedSection } from "./components/AnimatedSection";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    {
      name: "Frontend & UI",
      icon: <Globe className="w-6 h-6" />,
      technologies: [
        "JavaScript",
        "React",
        "Vue.js",
        "Nuxt.js",
        "Tailwind CSS",
        "FluxUI",
        "UI/UX",
        "Figma",
        "Photoshop",
      ],
    },
    {
      name: "Backend, Développement & IA",
      icon: <Server className="w-6 h-6" />,
      technologies: [
        "PHP",
        "Laravel + Livewire",
        "Node.js",
        "Python",
        "Java",
        "Blade",
        "TensorFlow",
      ],
    },
    {
      name: "Base de données",
      icon: <Database className="w-6 h-6" />,
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "DBeaver"],
    },
    {
      name: "DevOps & Outils de versioning",
      icon: <Palette className="w-6 h-6" />,
      technologies: ["Docker", "GitHub", "Bitbucket", "GitLab", "Linux Ubuntu"],
    },
    {
      name: "Outils & Productivité",
      icon: <Settings className="w-6 h-6" />,
      technologies: [
        "Jira",
        "Power Automate",
        "Microsoft Copilot Studio",
        "CapCut",
      ],
    },
  ];

  // --------- NOUVEAU : Expériences pour la timeline ----------
  const experiences = [
    {
      company: "Startup Nova",
      role: "Développeuse Full-Stack",
      period: "Jan. 2024 – Juil. 2025",
      location: "Paris, France",
      points: [
        "Refonte d’une app SaaS (React + Laravel) : -35% TTFB, +28% conversion.",
        "Mise en place CI/CD (GitHub Actions, Docker) et revues de code structurées.",
        "Conception d’un design system Tailwind + Figma, adoption par 3 équipes.",
      ],
      tech: [
        "React",
        "Laravel",
        "Tailwind",
        "Docker",
        "GitHub Actions",
        "MySQL",
      ],
    },
    {
      company: "Agence PixelCraft",
      role: "Développeuse Front-End",
      period: "Sept. 2022 – Déc. 2023",
      location: "Lyon, France (hybride)",
      points: [
        "Développement de sites Nuxt.js à fort trafic (SEO/SSR).",
        "Création de composants accessibles (a11y) et animations légères.",
        "Optimisation Lighthouse (Perf/SEO) > 95 sur 6 projets.",
      ],
      tech: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Vite", "Figma"],
    },
    {
      company: "Freelance",
      role: "Développeuse Web",
      period: "2021 – 2022",
      location: "Remote",
      points: [
        "API Node/Express pour intégrations partenaires (JWT, rate limit).",
        "Mini-pipeline d’ETL Python pour enrichir des données produits.",
        "Accompagnement clients : cadrage, backlog, livrables.",
      ],
      tech: ["Node.js", "Express", "PostgreSQL", "Python", "Docker"],
    },
  ];
  // -----------------------------------------------------------

  const projects = [
    {
      title: "Extracteur d’identité par IA",
      description:
        "Système d'extraction d'informations de documents d'identité avec reconnaissance de texte et extraction de données.",
      tech: [
        "Python",
        "Tensorflow",
        "Machine Learning",
        "OCR",
        "Annotations",
        "Dataset",
      ],
      image: "/nltk.png",
      link: "https://github.com/Fulkiaaa/sentiment-api-ntlk",
    },
    {
      title: "API d'Analyse de Sentiment",
      description:
        "API d'analyse de sentiment utilisant NLTK pour traiter et analyser les émotions dans les textes en temps réel.",
      tech: ["Python", "NLTK", "Flask", "Machine Learning"],
      image: "/nltk.png",
      link: "https://github.com/Fulkiaaa/sentiment-api-ntlk",
    },
    {
      title: "Forum JEE",
      description:
        "Application web de forum développée en Java Enterprise Edition avec gestion des utilisateurs et des discussions.",
      tech: ["Java", "JEE", "JSP", "MySQL"],
      image: "/JEE.png",
      link: "https://github.com/Fulkiaaa/Forum_JEE",
    },
    {
      title: "Movie App",
      description:
        "Application web de découverte de films avec recherche avancée, filtres et recommandations personnalisées.",
      tech: ["NuxtJS", "VueJS", "API REST", "Tailwind CSS"],
      image: "/movie.png",
      link: "https://github.com/Fulkiaaa/movie-app",
    },
    {
      title: "API Météo Node.js",
      description:
        "API météorologique développée en Node.js fournissant des prévisions météo en temps réel avec interface web.",
      tech: ["Node.js", "Express", "API Weather", "JavaScript"],
      image: "/meteo.png",
      link: "https://github.com/Fulkiaaa/meteo-nodejs-api",
    },
    {
      title: "Assassin's Run 2025",
      description:
        "Un petit jeu de type Endless Runner en défilement horizontal. Ce projet a été réalisé pour apprendre à créer un jeu sous Android Studio.",
      tech: ["Hackathon", "Android Studio", "Java"],
      image: "/assasins_run.png",
      link: "https://github.com/Fulkiaaa/Assassin-s-Run-2025-Hackathon",
    },
    {
      title: "Médiathèque Local Review",
      description:
        "Cette API permet la gestion d'une base de données de films avec système d'authentification. Elle comprend la gestion des films, acteurs, réalisateurs, genres, supports et avis.",
      tech: ["PHP", "Création API REST", "Versioning", "Admin Section"],
      image: "/mediatheque.png",
      link: "https://github.com/Fulkiaaa/mediatheque-local-review",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5efe6" }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{ backgroundColor: "rgba(245, 239, 230, 0.95)" }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <AnimatedSection animation="slideRight" delay={100}>
            <div className="text-2xl font-bold" style={{ color: "#091433" }}>
              Clara
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideLeft" delay={200}>
            <div className="hidden md:flex space-x-8">
              {[
                "hero",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
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
                  {section === "hero"
                    ? "Accueil"
                    : section === "about"
                    ? "À propos"
                    : section === "experience"
                    ? "Expériences"
                    : section === "skills"
                    ? "Compétences"
                    : section === "projects"
                    ? "Projets"
                    : "Contact"}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </nav>

      {/* Hero Section */}
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
              performantes. Je transforme vos idées en solutions web innovantes
              et sur mesure.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={1100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 rounded-xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300 text-white font-semibold"
                style={{ backgroundColor: "#ff923e" }}
              >
                Voir mes projets
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 rounded-xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                style={{ backgroundColor: "#f5efe6", color: "#091433" }}
              >
                <Mail className="w-5 h-5" />
                Contacter moi
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={1300}>
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce p-3 rounded-full shadow-neumorphism"
              style={{ backgroundColor: "#f5efe6" }}
            >
              <ChevronDown className="w-6 h-6" style={{ color: "#091433" }} />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
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
                    À 21 ans, je suis une développeuse web full-stack
                    passionnée, spécialisée dans la création d'applications web
                    modernes et performantes. Mon expertise couvre l'ensemble du
                    développement web, du frontend au backend.
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

      {/* --------- NOUVEAU : Experience Section (timeline corrigée) --------- */}
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
            {/* ligne verticale */}
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
                    {/* la ligne devient relative pour placer la pastille */}
                    <div className="relative grid md:grid-cols-2 gap-8 items-stretch">
                      {/* Colonne gauche */}
                      <div className={` ${isLeft ? "md:pr-12" : ""}`}>
                        {isLeft && (
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
                                <h3
                                  className="text-xl font-bold"
                                  style={{ color: "#091433" }}
                                >
                                  {exp.role}
                                </h3>
                                <div
                                  className="text-sm"
                                  style={{ color: "#ff923e" }}
                                >
                                  {exp.company} • {exp.location}
                                </div>
                              </div>
                            </div>

                            <div
                              className="text-sm mb-4"
                              style={{ color: "#091433" }}
                            >
                              {exp.period}
                            </div>

                            <ul className="grid gap-2 mb-4">
                              {exp.points.map((p, idx) => (
                                <li
                                  key={idx}
                                  className="px-2 py-1 rounded-lg shadow-neumorphism-small text-sm"
                                  style={{
                                    backgroundColor: "#f5efe6",
                                    color: "#091433",
                                  }}
                                >
                                  {p}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((t, ti) => (
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
                        )}
                      </div>

                      {/* Colonne droite */}
                      <div className={`${!isLeft ? "md:pl-12" : ""}`}>
                        {!isLeft && (
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
                                <h3
                                  className="text-xl font-bold"
                                  style={{ color: "#091433" }}
                                >
                                  {exp.role}
                                </h3>
                                <div
                                  className="text-sm"
                                  style={{ color: "#ff923e" }}
                                >
                                  {exp.company} • {exp.location}
                                </div>
                              </div>
                            </div>

                            <div
                              className="text-sm mb-4"
                              style={{ color: "#091433" }}
                            >
                              {exp.period}
                            </div>

                            <ul className="grid gap-2 mb-4">
                              {exp.points.map((p, idx) => (
                                <li
                                  key={idx}
                                  className="px-2 py-1 rounded-lg shadow-neumorphism-small text-sm"
                                  style={{
                                    backgroundColor: "#f5efe6",
                                    color: "#091433",
                                  }}
                                >
                                  {p}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((t, ti) => (
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
                        )}
                      </div>

                      {/* Pastille desktop : centrée pile sur la ligne */}
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

                      {/* Pastille mobile : alignée à la ligne déportée à gauche */}
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
      {/* ------------------------------------------------------------------- */}

      {/* Skills Section */}
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
            {skills.map((skill, index) => (
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
                    <div className="text-white">{skill.icon}</div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="slideUp">
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ color: "#091433" }}
            >
              Mes projets
            </h2>
          </AnimatedSection>

          <div className="grid auto-rows-[1fr] md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projects.map((project, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={200 + index * 100}
              >
                <div
                  className="h-full min-h[520px] md:min-h-[520px] flex flex-col rounded-3xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300 overflow-hidden group"
                  style={{ backgroundColor: "#f5efe6" }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: "#091433" }}
                    >
                      {project.title}
                    </h3>

                    <div className="flex-1">
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "#091433" }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 rounded-lg text-xs shadow-neumorphism-small"
                            style={{
                              backgroundColor: "#f5efe6",
                              color: "#ff923e",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full py-3 rounded-xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#ff923e", color: "white" }}
                    >
                      Voir sur GitHub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                    <div>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        className="w-full p-4 rounded-2xl shadow-neumorphism-inset border-none outline-none"
                        style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="slideUp" delay={600}>
                    <div>
                      <input
                        type="email"
                        placeholder="Votre email"
                        className="w-full p-4 rounded-2xl shadow-neumorphism-inset border-none outline-none"
                        style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="slideUp" delay={700}>
                    <div>
                      <textarea
                        placeholder="Votre message"
                        rows={5}
                        className="w-full p-4 rounded-2xl shadow-neumorphism-inset border-none outline-none resize-none"
                        style={{ backgroundColor: "#f5efe6", color: "#091433" }}
                      />
                    </div>
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

      {/* Footer */}
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
    </div>
  );
}

export default App;
