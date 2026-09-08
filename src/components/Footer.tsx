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
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-start">
          <p className="font-display text-base font-bold text-ink">
            {site.name}
          </p>
          <p className="text-sm text-muted">{site.descriptor}</p>
        </div>

        <div className="flex items-center gap-5">
          {hasLinkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={footer.linkedinLabel}
              className="text-ink-soft transition-colors hover:text-wine"
            >
              <LinkedinIcon size={20} />
            </a>
          )}
          {hasGithub && (
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label={footer.githubLabel}
              className="text-ink-soft transition-colors hover:text-wine"
            >
              <GithubIcon size={20} />
            </a>
          )}
          {hasEmail && (
            <a
              href={emailHref}
              aria-label={footer.emailLabel}
              className="text-ink-soft transition-colors hover:text-wine"
            >
              <Mail size={20} />
            </a>
          )}
        </div>

        <p className="text-xs text-muted">
          © {year} {site.name} · {site.descriptor}
        </p>
      </Container>
    </footer>
  );
}
