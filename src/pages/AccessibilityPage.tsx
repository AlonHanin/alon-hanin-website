import { Container } from "../components/Container";
import { emailHref, contact } from "../config/contact";
import { useLanguage } from "../i18n/LanguageContext";

export function AccessibilityPage() {
  const { lang } = useLanguage();
  const he = lang === "he";
  const sections = he ? [
    ["הגישה שלנו", "חשוב לי לאפשר לאנשים עם מוגבלות להשתמש באתר ולקבל מידע על השירותים. אני פועל לשיפור הנגישות בהתייחס לתקן הישראלי ת״י 5568 ולהנחיות WCAG ברמת AA. הצהרה זו מתארת את ההתאמות והבדיקות שבוצעו; היא אינה אישור לעמידה מלאה בתקן."],
    ["התאמות באתר", "האתר כולל ניווט במקלדת, קישור לדילוג לתוכן, סימון מיקוד, מבנה כותרות, תיאורי תמונות ותמיכה בעברית ובאנגלית. הגלריות ניתנות להפעלה בהחלקה, בכפתורים ובמקלדת, ללא הפעלה אוטומטית. אפשרויות התצוגה כוללות הגדלת טקסט, ניגודיות גבוהה, הדגשת קישורים וצמצום תנועה. ניתן להסתיר את הכפתור באמצעות X ולהחזירו דרך ״אפשרויות נגישות״ בתחתית כל עמוד."],
    ["בדיקות ומגבלות ידועות", "בוצעו בדיקות בדפדפן Chrome, בדיקות מקלדת ובדיקות אוטומטיות באמצעות axe-core. טרם בוצעה בדיקת נגישות מלאה על ידי מומחה או בדיקה עם קורא מסך. צילומי הפרויקטים מלווים בתיאורים, אך לא כל הטקסט והנתונים בתוך הצילומים מתומללים. אפשר לפנות לקבלת הסבר נגיש על המידע המוצג. שירותים חיצוניים שאליהם האתר מקשר אינם בשליטתי."],
    ["אופן מתן השירות", "השירות ניתן מרחוק בלבד. אין קבלת קהל במקום פיזי."],
  ] : [
    ["Our approach", "I want people with disabilities to be able to use this site and learn about my services. I am working to improve accessibility with reference to Israeli Standard 5568 and WCAG Level AA. This statement describes the adjustments and checks performed; it is not certification of full compliance."],
    ["Accessibility features", "The site includes keyboard navigation, a skip-to-content link, visible focus, structured headings, image descriptions, and Hebrew and English support. Galleries support swiping, buttons and keyboard controls, with no autoplay. Display options include larger text, high contrast, underlined links and reduced motion. Use X to hide the button and Accessibility options in any page footer to restore it."],
    ["Checks and known limitations", "Checks were performed in Chrome, using the keyboard and automated axe-core scans. A full expert audit and screen reader testing have not yet been performed. Project screenshots include descriptions, but not a transcript of every embedded label or data point. Please contact me for an accessible explanation of the information shown. Linked external services are outside my control."],
    ["How services are provided", "Services are provided remotely only. There is no physical location for receiving clients."],
  ];
  return <Container className="max-w-3xl py-10 sm:py-14">
    <h1 className="text-3xl font-bold">{he ? "הצהרת נגישות" : "Accessibility statement"}</h1>
    <p className="mt-3 text-sm text-ink-soft">{he ? "עודכן בתאריך: 9 בספטמבר 2026" : "Last updated: September 9, 2026"}</p>
    {sections.map(([title, body]) => <section key={title} className="mt-8"><h2 className="text-xl font-bold">{title}</h2><p className="mt-3 leading-relaxed text-ink-soft">{body}</p></section>)}
    <section className="mt-8"><h2 className="text-xl font-bold">{he ? "פניות בנושא נגישות" : "Accessibility enquiries"}</h2>
      <p className="mt-3 leading-relaxed text-ink-soft">{he ? "נתקלתם בקושי? פנו לאלון חנין וציינו את כתובת העמוד, תיאור הקושי והדפדפן או הטכנולוגיה המסייעת שבה השתמשתם. אבדוק את הפנייה ואנסה לספק מענה מתאים." : "Encountered a difficulty? Contact Alon Hanin with the page URL, a description of the issue, and your browser or assistive technology. I will review the issue and try to provide a suitable response."}</p>
      <a href={emailHref} className="mt-3 block break-all py-2 text-accent underline" dir="ltr">{contact.email}</a>
      <a href={`https://wa.me/${contact.whatsapp}`} className="inline-block py-2 text-accent underline">{he ? "פנייה ב־WhatsApp" : "Contact via WhatsApp"}</a>
    </section>
  </Container>;
}
