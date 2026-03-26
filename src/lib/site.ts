/** URL canônica do site (sem barra final). Usar NEXT_PUBLIC_SITE_URL em produção. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://coimcamp.com"
  );
}

export const SITE_NAME = "COIMCAMP";

/** Variações que o Google pode considerar em structured data. */
export const SITE_NAME_ALTERNATES = [
  "Coimcamp",
  "COIMCAMP Automatização",
  "Coimcamp Automatização",
] as const;

/** Perfis/páginas oficiais para desambiguação no Knowledge Graph. */
export const ORGANIZATION_SAME_AS = [
  "https://g.page/r/CY3TcCjNyf3MEAI/review",
] as const;

export function getAbsoluteLogoUrl(): string {
  return `${getSiteUrl()}/images/setting.png`;
}
