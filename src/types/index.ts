import type { LucideIcon } from "lucide-react";

export type Lang = "en" | "he";

/** A value that differs by language. */
export type Localized<T> = Record<Lang, T>;

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  examples: string[];
}

export type ProjectStatus = "active" | "in-development" | "academic";

export interface Project {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  problem: string;
  solution: string;
  capabilities: string[];
  stack: string[];
  visual: "property" | "green" | "bi" | "cats" | "wine";
  featured: boolean;
  published: boolean;
  headline: string;
  scope: string;
  images: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
    presentation: "device" | "browser";
  }[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
