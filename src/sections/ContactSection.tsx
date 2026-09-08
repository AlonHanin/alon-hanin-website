import { MessageCircle, Mail } from "lucide-react";
import { contactSection } from "../data/siteContent";
import {
  hasWhatsapp,
  hasEmail,
  whatsappHref,
  emailHref,
  contact,
} from "../config/contact";
import { Container } from "../components/Container";
import { CTAButton } from "../components/Button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div className="rounded-2xl border border-line bg-ink px-8 py-14 text-center sm:px-16">
          <h2 className="text-balance font-display text-3xl font-bold leading-[1.2] text-paper sm:text-4xl">
            {contactSection.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-paper/75">
            {contactSection.sub}
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
                {contactSection.whatsappLabel}
              </CTAButton>
            )}
            {hasEmail && (
              <CTAButton
                href={emailHref}
                variant="secondary"
                className="border-paper/25 text-paper hover:border-paper/50 hover:bg-paper/[0.06]"
              >
                <Mail size={18} />
                {contactSection.emailLabel}
              </CTAButton>
            )}
          </div>

          {hasEmail && (
            <p className="mt-6 text-sm text-paper/50">{contact.email}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
