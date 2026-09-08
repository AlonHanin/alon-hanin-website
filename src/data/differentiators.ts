import { Route, Feather, MessageCircle, Sprout } from "lucide-react";
import type { Differentiator, Localized } from "../types";

export const differentiators: Localized<Differentiator[]> = {
  en: [
    { id: "process-first", title: "Process first, code second", description: "Before a single line of code, we understand how the work actually happens today.", icon: Route },
    { id: "simple", title: "Simple solutions", description: "No unnecessary complexity. A system that's easy to understand, use and maintain.", icon: Feather },
    { id: "direct", title: "Direct communication", description: "The person you talk to is the same person analyzing and building the system.", icon: MessageCircle },
    { id: "start-small", title: "Start small", description: "We can start with one process or a focused MVP, and expand later as needed.", icon: Sprout },
  ],
  he: [
    { id: "process-first", title: "קודם התהליך, אחר כך הקוד", description: "לפני שכותבים שורת קוד אחת, מבינים איך העבודה קורית בפועל היום.", icon: Route },
    { id: "simple", title: "פתרונות פשוטים", description: "בלי מורכבות מיותרת. מערכת שקל להבין, להשתמש בה ולתחזק.", icon: Feather },
    { id: "direct", title: "תקשורת ישירה", description: "האדם שמדבר איתכם הוא גם זה שמנתח ובונה את המערכת.", icon: MessageCircle },
    { id: "start-small", title: "מתחילים בקטן", description: "אפשר להתחיל מתהליך אחד או מ-MVP ממוקד, ולהרחיב בהמשך לפי הצורך.", icon: Sprout },
  ],
};
