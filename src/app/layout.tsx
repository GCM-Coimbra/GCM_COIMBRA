import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { FixedContactButton } from "@/components/fixed-contact-button/fixed-contact-button";
import { NavigationMenu } from "@/components/navigation-menu/navigation-menu";
import { getSiteUrl, SITE_NAME } from "@/lib/site";
import { Footer } from "./(sections)/footer/footer";

const siteUrl = getSiteUrl();

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
