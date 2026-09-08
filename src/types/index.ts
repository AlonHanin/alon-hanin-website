import type { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  examples: string[];
}

export type ProjectStatus = "פעיל" | "בפיתוח" | "אקדמי";

export interface Project {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  problem: string;
  solution: string;
  capabilities: string[];
  stack: string[];
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
