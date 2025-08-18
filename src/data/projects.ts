import type { Project } from "../types";

const pub = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export const projects: Project[] = [
  {
    title: "Spotify Statistics",
    description:
      "Interface web pour visualiser les statistiques de votre compte Spotify, incluant les artistes et chansons les plus écoutés, genres ...",
    tech: ["ReactJS", "NextJS", "Axios", "API Spotify", "Projet personnel"],
    image: pub("/spotify.png"),
    link: "https://github.com/Fulkiaaa/sentiment-api-ntlk",
  },
  {
    title: "Extracteur d'identité par IA",
    description:
      "Système d'extraction d'informations de documents d'identité avec reconnaissance de texte et extraction de données.",
    tech: [
      "Python",
      "Tensorflow",
      "Machine Learning",
      "OCR",
      "Annotations",
      "Dataset",
      "La Manu",
    ],
    image: pub("/passport_id.png"),
    link: "https://github.com/Fulkiaaa/sentiment-api-ntlk",
  },
  {
    title: "API d'Analyse de Sentiment",
    description:
      "API d'analyse de sentiment utilisant NLTK pour traiter et analyser les émotions dans les textes en temps réel.",
    tech: ["Python", "NLTK", "Flask", "Machine Learning", "La Manu"],
    image: pub("/nltk.png"),
    link: "https://github.com/Fulkiaaa/sentiment-api-ntlk",
  },
  {
    title: "Forum JEE",
    description:
      "Application web de forum développée en Java Enterprise Edition avec gestion des utilisateurs et des discussions.",
    tech: ["Java", "JEE", "JSP", "MySQL", "La Manu"],
    image: pub("/JEE.png)"),
    link: "https://github.com/Fulkiaaa/Forum_JEE",
  },
  {
    title: "Movie App",
    description:
      "Application web de découverte de films avec recherche avancée, filtres et recommandations personnalisées.",
    tech: ["NuxtJS", "VueJS", "API REST", "Tailwind CSS", "Projet personnel"],
    image: pub("/movie.png"),
    link: "https://github.com/Fulkiaaa/movie-app",
  },
  {
    title: "API Météo Node.js",
    description:
      "API météorologique développée en Node.js fournissant des prévisions météo en temps réel avec interface web.",
    tech: ["Node.js", "Express", "API Weather", "JavaScript", "La Manu"],
    image: pub("/meteo.png"),
    link: "https://github.com/Fulkiaaa/meteo-nodejs-api",
  },
  {
    title: "Assassin's Run 2025",
    description:
      "Un petit jeu de type Endless Runner en défilement horizontal. Ce projet a été réalisé pour apprendre à créer un jeu sous Android Studio.",
    tech: ["Hackathon", "Android Studio", "Java", "La Manu"],
    image: pub("/assasins_run.png"),
    link: "https://github.com/Fulkiaaa/Assassin-s-Run-2025-Hackathon",
  },
  {
    title: "Médiathèque Local Review",
    description:
      "Cette API permet la gestion d'une base de données de films avec système d'authentification. Elle comprend la gestion des films, acteurs, réalisateurs, genres, supports et avis.",
    tech: [
      "PHP",
      "Création API REST",
      "Versioning",
      "Admin Section",
      "La Manu",
    ],
    image: pub("/mediatheque.png"),
    link: "https://github.com/Fulkiaaa/mediatheque-local-review",
  },
];
