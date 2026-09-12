import { MessageCircle, Mail } from "lucide-react";
import { contactSection } from "../data/siteContent";
import {
  hasWhatsapp,
  hasEmail,
  whatsappHref,
  emailHref,
} from "../config/contact";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { CTAButton } from "../components/Button";

export function ContactSection() {
  const { lang } = useLanguage();
  const t = contactSection[lang];

  return (
    <section id="contact" className="py-8 sm:py-12">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-ink px-5 py-7 text-center sm:px-12 sm:py-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(47,111,237,0.25),transparent)]"
          />
          <div className="relative">
            <h2 className="text-balance font-display text-2xl font-bold leading-[1.2] text-white sm:text-3xl">
              {t.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-white/70">
              {t.sub}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
