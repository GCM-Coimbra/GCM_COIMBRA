import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "sonner";
import { FixedContactButton } from "@/components/fixed-contact-button/fixed-contact-button";
import { NavigationMenu } from "@/components/navigation-menu/navigation-menu";
import { getSiteUrl, SITE_NAME } from "@/lib/site";
import { Footer } from "./(sections)/footer/footer";

const siteUrl = getSiteUrl();
const GOOGLE_ADS_TAG_ID = "AW-18042166634";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "COIMCAMP — Automação, monitoramento e serviços elétricos em Campinas e região",
    template: "%s | COIMCAMP",
  },
  description:
    "COIMCAMP oferece automação, monitoramento, segurança e serviços elétricos em Campinas, Valinhos, Vinhedo e região. Equipe especializada e atendimento próximo.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    url: `${siteUrl}/`,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Script
          id="gtag-js"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID}`}
          strategy="beforeInteractive"
        />
        <Script id="gtag-config" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_TAG_ID}');
          `}
        </Script>
        <div className="relative flex min-h-screen w-full flex-col">
          <NavigationMenu />
          {children}
          <Footer />
          <Toaster position="top-center" />
          <FixedContactButton />
        </div>
      </body>
    </html>
  );
}
