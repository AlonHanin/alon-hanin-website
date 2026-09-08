import { Route, Feather, MessageCircle, Sprout } from "lucide-react";
import type { Differentiator } from "../types";

export const differentiators: Differentiator[] = [
  {
    id: "process-first",
    title: "קודם התהליך, אחר כך הקוד",
    description:
      "לפני שכותבים שורת קוד אחת, מבינים איך העבודה קורית בפועל היום.",
    icon: Route,
  },
  {
    id: "simple",
    title: "פתרונות פשוטים",
    description: "בלי מורכבות מיותרת. מערכת שקל להבין, להשתמש בה ולתחזק.",
    icon: Feather,
  },
  {
    id: "direct",
    title: "תקשורת ישירה",
    description: "האדם שמדבר איתכם הוא גם זה שמנתח ובונה את המערכת.",
    icon: MessageCircle,
  },
  {
    id: "start-small",
    title: "מתחילים בקטן",
    description:
      "אפשר להתחיל מתהליך אחד או מ-MVP ממוקד, ולהרחיב בהמשך לפי הצורך.",
    icon: Sprout,
  },
];
