import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LanguageProvider } from "./i18n/LanguageContext";

// Keep links shared before the move to separate pages working.
const legacyLinks: Record<string, string> = {
  "#services": "/services/", "#how-i-work": "/services/#how-i-work",
  "#projects": "/work/", "#about": "/contact/#about", "#contact": "/contact/",
};
if (window.location.pathname === "/" && legacyLinks[window.location.hash]) {
  window.location.replace(legacyLinks[window.location.hash]);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
