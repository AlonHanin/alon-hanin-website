import type { InsightArticle, Localized } from "../types/index.ts";

// Publish only complete, reviewed articles. Keeping this list empty prevents
// placeholder copy from being indexed while the Insights infrastructure is ready.
export const insights: Localized<InsightArticle[]> = {
  en: [],
  he: [],
};

export const priorityInsightTopics = [
  "Custom Business System vs Ready-Made Software: Which One Do You Need?",
  "How to Identify Repetitive Business Processes Worth Automating",
  "What Is Business Process Automation? A Practical Guide for Growing Companies",
] as const;

export function publishedInsights(lang: keyof typeof insights) {
  return insights[lang].filter((article) => article.published);
}
