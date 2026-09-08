import { MessageCircle, Mail } from "lucide-react";
import { contactSection } from "../data/siteContent";
import {
  hasWhatsapp,
  hasEmail,
  whatsappHref,
  emailHref,
  contact,
} from "../config/contact";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { CTAButton } from "../components/Button";

export function ContactSection() {
  const { lang } = useLanguage();
  const t = contactSection[lang];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-ink px-8 py-14 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(47,111,237,0.25),transparent)]"
          />
          <div className="relative">
            <h2 className="text-balance font-display text-3xl font-bold leading-[1.2] text-white sm:text-4xl">
              {t.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-white/70">
              {t.sub}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              {hasWhatsapp && (
                <CTAButton
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                >
                  <MessageCircle size={18} />
                  {t.whatsappLabel}
                </CTAButton>
              )}
              {hasEmail && (
                <CTAButton
                  href={emailHref}
                  variant="secondary"
                  className="border-white/25 text-white hover:border-white/50 hover:bg-white/[0.06]"
                >
                  <Mail size={18} />
                  {t.emailLabel}
                </CTAButton>
              )}
            </div>

            {hasEmail && (
              <p className="mt-6 font-mono text-sm text-white/45">{contact.email}</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
