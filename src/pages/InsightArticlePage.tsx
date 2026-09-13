import { CTAButton } from "../components/Button";
import { Container } from "../components/Container";
import { services } from "../data/services";
import { publishedInsights } from "../data/insights";
import { useLanguage } from "../i18n/LanguageContext";
import type { InsightArticle } from "../types";

export function InsightArticlePage({ article }: { article: InsightArticle }) {
  const { lang } = useLanguage();
  const he = lang === "he";
  const relatedArticles = publishedInsights(lang).filter((item) => article.relatedArticleSlugs.includes(item.slug));
  const relatedServices = services[lang].filter((service) => article.relatedServiceIds.includes(service.id));

  return (
    <article className="py-10 sm:py-16">
      <Container className="max-w-4xl">
        <a href="/insights/" className="inline-flex min-h-11 items-center text-sm font-semibold text-accent">{he ? "← לכל התובנות" : "← All insights"}</a>
        <header className="mt-4">
          <p className="text-xs font-semibold text-accent">{he ? "מדריך מעשי" : "Practical guide"}</p>
          <h1 className="mt-3 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">{article.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{article.summary}</p>
          <p className="mt-4 text-sm text-muted"><span>{article.author}</span> · <time dateTime={article.publishedAt}>{article.publishedAt}</time>{article.updatedAt && <> · {he ? "עודכן" : "Updated"} <time dateTime={article.updatedAt}>{article.updatedAt}</time></>}</p>
        </header>

        <div className="mt-10 space-y-9">
          {article.sections.map((section) => <section key={section.heading}><h2 className="font-display text-2xl font-bold">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 leading-relaxed text-ink-soft">{paragraph}</p>)}</section>)}
        </div>

        {relatedServices.length > 0 && <section className="mt-10 border-t border-line-soft pt-6"><h2 className="font-display text-xl font-bold">{he ? "שירותים קשורים" : "Related services"}</h2><ul className="mt-3 flex flex-wrap gap-3">{relatedServices.map((service) => <li key={service.id}><a href={`/services/#${service.id}`} className="font-semibold text-accent underline underline-offset-4">{service.title}</a></li>)}</ul></section>}
        {relatedArticles.length > 0 && <section className="mt-10 border-t border-line-soft pt-6"><h2 className="font-display text-xl font-bold">{he ? "מאמרים קשורים" : "Related articles"}</h2><ul className="mt-3 space-y-2">{relatedArticles.map((item) => <li key={item.slug}><a href={`/insights/${item.slug}/`} className="font-semibold text-accent underline underline-offset-4">{item.title}</a></li>)}</ul></section>}

        <div className="mt-10 rounded-xl bg-paper-raised p-5"><CTAButton href={article.cta?.href ?? "/contact/"}>{article.cta?.label ?? (he ? "בואו נדבר" : "Let's talk")}</CTAButton></div>
      </Container>
    </article>
  );
}
