/**
 * Contact configuration.
 *
 * Every contact CTA on the site reads from here — nothing is hardcoded
 * inside components. Leave a field as an empty string "" to hide that
 * CTA automatically (see helpers below).
 *
 * whatsapp: digits only, international format, no "+" and no spaces
 *   (e.g. "972501234567" for an Israeli number 050-123-4567).
 */
export const contact = {
  whatsapp: "972542326294",
  email: "alon.hanin95@gmail.com",
  linkedin: "https://www.linkedin.com/in/alon-hanin",
  github: "",
};

export const hasWhatsapp = contact.whatsapp.trim().length > 0;
export const hasEmail = contact.email.trim().length > 0;
export const hasLinkedin = contact.linkedin.trim().length > 0;
export const hasGithub = contact.github.trim().length > 0;

export const whatsappHref = hasWhatsapp
  ? `https://wa.me/${contact.whatsapp}`
  : "";

export const emailHref = hasEmail ? `mailto:${contact.email}` : "";
