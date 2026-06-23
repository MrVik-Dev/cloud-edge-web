export const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-")     // replace spaces with -
    .replace(/-+/g, "-");     // remove duplicate -
};

const WHATSAPP_PHONE = "447442586325";
const CONTACT_EMAIL = "info@cloudedge.in";

export const getWhatsAppLink = (message = "Hi Cloud Edge Solutions") =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export const getEmailLink = (
  subject = "Course Enquiry",
  body = "Hi Cloud Edge Solutions,"
) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
