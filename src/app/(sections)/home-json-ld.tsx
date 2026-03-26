import Script from "next/script";
import { email, whatsappNumber } from "@/lib/contact-data";
import {
  getAbsoluteLogoUrl,
  getSiteUrl,
  ORGANIZATION_SAME_AS,
  SITE_NAME,
  SITE_NAME_ALTERNATES,
} from "@/lib/site";

export function HomeJsonLd() {
  const base = getSiteUrl();
  const websiteId = `${base}/#website`;
  const organizationId = `${base}/#organization`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: SITE_NAME,
        alternateName: [...SITE_NAME_ALTERNATES],
        url: `${base}/`,
        publisher: { "@id": organizationId },
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        alternateName: [...SITE_NAME_ALTERNATES],
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          url: getAbsoluteLogoUrl(),
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email,
          telephone: `+${whatsappNumber}`,
          areaServed: "BR",
          availableLanguage: ["pt-BR", "Portuguese"],
        },
        sameAs: [...ORGANIZATION_SAME_AS],
      },
    ],
  };

  return (
    <Script
      id="coimcamp-website-organization-schema"
      type="application/ld+json"
    >
      {JSON.stringify(graph)}
    </Script>
  );
}
