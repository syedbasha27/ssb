export const siteConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  cartStorageKey: "ssb_cart",
};

export function getWhatsAppLink() {
  if (!siteConfig.whatsappNumber) return null;
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}`;
}
