import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { AccessibilityTools } from "./components/AccessibilityTools";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { Container } from "./components/Container";
import { CTAButton } from "./components/Button";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectPage } from "./pages/ProjectPage";
import { InsightsPage } from "./pages/InsightsPage";
import { InsightArticlePage } from "./pages/InsightArticlePage";
import { ProjectsSection } from "./sections/ProjectsSection";
import { projects } from "./data/projects";
import { insights } from "./data/insights";
import { canonicalUrl, normalizePath, pageDescription, pageRoutes, pageTitle } from "./config/routes";
import { useLanguage } from "./i18n/LanguageContext";

function App() {
  const { lang } = useLanguage();
  const path = normalizePath(window.location.pathname);
  const route = pageRoutes.find((page) => page.path === path);
  const project = route?.key === "project" ? projects[lang].find((p) => p.published && path === `/work/${p.id}/`) : undefined;
  const insight = route?.key === "insight" ? insights[lang].find((article) => article.published && path === `/insights/${article.slug}/`) : undefined;

  useEffect(() => {
    document.title = pageTitle(path, lang);
    const description = pageDescription(path, lang);
    const canonical = canonicalUrl(path);
    const setContent = (selector: string, value: string) => document.querySelector(selector)?.setAttribute("content", value);
    setContent('meta[name="description"]', description);
    setContent('meta[name="robots"]', !route || route.indexable === false ? "noindex,follow" : "index,follow");
    setContent('meta[property="og:title"]', document.title);
    setContent('meta[property="og:description"]', description);
    setContent('meta[property="og:url"]', canonical);
    setContent('meta[property="og:locale"]', lang === "he" ? "he_IL" : "en_US");
    setContent('meta[property="og:type"]', insight ? "article" : "website");
    setContent('meta[name="twitter:title"]', document.title);
    setContent('meta[name="twitter:description"]', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
  }, [path, lang, route, insight]);

  let content;
  if (route?.key === "home") content = <HomePage />;
  else if (route?.key === "services") content = <ServicesPage />;
  else if (route?.key === "contact") content = <ContactPage />;
  else if (route?.key === "work") content = <ProjectsSection />;
  else if (route?.key === "accessibility") content = <AccessibilityPage />;
  else if (route?.key === "insights") content = <InsightsPage />;
  else if (insight) content = <InsightArticlePage article={insight} />;
  else if (project) content = <ProjectPage project={project} />;
  else content = (
    <Container className="py-16">
      <p className="text-accent">404</p>
      <h1 className="mt-3 text-3xl font-bold">{lang === "he" ? "העמוד לא נמצא" : "Page not found"}</h1>
      <p className="my-5 text-ink-soft">{lang === "he" ? "אפשר לחזור לדף הבית ולמצוא את מה שחיפשתם." : "Head back to the homepage to find what you need."}</p>
      <CTAButton href="/">{lang === "he" ? "לדף הבית" : "Back to home"}</CTAButton>
    </Container>
  );

  return (
    <div id="site-shell" className="flex min-h-screen flex-col bg-paper pb-20 md:pb-0">
      <Nav />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">{content}</main>
      <Footer />
      <AccessibilityTools />
    </div>
  );
}

export default App;
