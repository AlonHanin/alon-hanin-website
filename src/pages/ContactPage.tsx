import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "../components/Container";
import { ContactSection } from "../sections/ContactSection";
import { AboutSection } from "../sections/AboutSection";

export function ContactPage() {
  const { lang } = useLanguage();
  return (
    <>
      <Container className="pt-9 sm:pt-14">
        <p className="text-xs font-semibold text-accent">{lang === "he" ? "עליי ויצירת קשר" : "About & contact"}</p>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{lang === "he" ? "נעים להכיר, אני אלון חנין." : "Hi, I'm Alon Hanin."}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">{lang === "he" ? "ספרו לי מה קורה בעסק שלכם ומה הייתם רוצים לפשט." : "Tell me about your business and what you'd like to make simpler."}</p>
      </Container>
      <ContactSection />
      <AboutSection />
    </>
  );
}
