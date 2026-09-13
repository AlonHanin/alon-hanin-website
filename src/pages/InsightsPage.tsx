import { CTAButton } from "../components/Button";
import { Container } from "../components/Container";
import { publishedInsights } from "../data/insights";
import { useLanguage } from "../i18n/LanguageContext";

export function InsightsPage() {
  const { lang } = useLanguage();
  const articles = publishedInsights(lang);
  const he = lang === "he";

  return (
    <section className="py-10 sm:py-16">
      <Container>
        <p className="text-xs font-semibold text-accent">{he ? "תובנות" : "Insights"}</p>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{he ? "מדריכים מעשיים לעבודה דיגיטלית טובה יותר" : "Practical guides for better digital workflows"}</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{he ? "מאמרים מעשיים על מערכות עסקיות, אוטומציה ותהליכי עבודה — מה לבדוק, מתי להתחיל ואיך לבחור פתרון שמתאים לעסק." : "Practical articles on business systems, automation and workflows — what to examine, when to start and how to choose a solution that fits the business."}</p>

        {articles.length > 0 ? (
          <div className="mt-8 space-y-4">
            {articles.map((article) => (
              <article key={article.slug} className="rounded-xl border border-line bg-paper-raised p-5 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:p-6">
                <div className="min-w-0">
                  <h2 className="font-display text-xl font-bold"><a href={`/insights/${article.slug}/`} className="hover:text-accent">{article.title}</a></h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{article.summary}</p>
                </div>
                <time className="mt-4 block shrink-0 text-xs text-muted sm:mt-0" dateTime={article.publishedAt}>{article.publishedAt}</time>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-line bg-paper-raised p-5">
            <p className="text-sm text-ink-soft">{he ? "אין עדיין מאמרים שפורסמו." : "No articles have been published yet."}</p>
          </div>
        )}

        <div className="mt-8"><CTAButton href="/contact/">{he ? "יש לכם תהליך שתרצו לשפר?" : "Have a workflow you want to improve?"}</CTAButton></div>
      </Container>
    </section>
  );
}
