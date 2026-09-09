import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";
import { site } from "../config/site";
import { footer } from "../data/siteContent";
import {
  contact,
  hasLinkedin,
  hasGithub,
  hasEmail,
  emailHref,
} from "../config/contact";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "./Container";

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  const t = footer[lang];
  const brand = site[lang];

  return (
    <footer className="border-t border-line-soft">
      <Container className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-start">
          <p className="font-display text-base font-bold text-ink">
            {brand.name}
          </p>
          <p className="text-sm text-muted">{brand.descriptor}</p>
        </div>

        <div className="flex items-center gap-5">
          {hasLinkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={t.linkedinLabel}
              className="text-ink-soft transition-colors hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
          )}
          {hasGithub && (
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label={t.githubLabel}
              className="text-ink-soft transition-colors hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
          )}
          {hasEmail && (
            <a
              href={emailHref}
              aria-label={t.emailLabel}
              className="text-ink-soft transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
          )}
        </div>

        <p className="text-xs text-muted">
          © {year} {brand.name} · {brand.descriptor}
        </p>
      </Container>
      <Container className="flex flex-wrap justify-center gap-x-6 gap-y-2 pb-6 text-sm">
        <button id="accessibility-restore" type="button" onClick={() => window.dispatchEvent(new Event("open-accessibility"))} className="min-h-11 text-accent underline">{lang === "he" ? "אפשרויות נגישות" : "Accessibility options"}</button>
        <a href="/accessibility/" className="inline-flex min-h-11 items-center text-accent underline">{lang === "he" ? "הצהרת נגישות" : "Accessibility statement"}</a>
      </Container>
    </footer>
  );
}
