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
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
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
    </footer>
  );
}
