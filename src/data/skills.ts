import { Database, Globe, Palette, Server, Settings } from "lucide-react";
import type { Skill } from "../types";

export const skills: Skill[] = [
  {
    name: "Frontend & UI",
    icon: Globe, // 👈 on stocke la référence au composant, pas du JSX
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
    icon: Server,
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
    icon: Database,
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "DBeaver"],
  },
  {
    name: "DevOps & Outils de versioning",
    icon: Palette,
    technologies: ["Docker", "GitHub", "Bitbucket", "GitLab", "Linux Ubuntu"],
  },
  {
    name: "Outils & Productivité",
    icon: Settings,
    technologies: [
      "Jira",
      "Power Automate",
      "Microsoft Copilot Studio",
      "CapCut",
    ],
  },
];
