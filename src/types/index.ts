import type { LucideIcon } from "lucide-react";

export type Skill = {
  name: string;
  icon: LucideIcon;
  technologies: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
  during?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};
