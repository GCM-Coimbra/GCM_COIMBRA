import type { Metadata } from "next";
import { Contact } from "./(sections)/contact/contact";
import { Customers } from "./(sections)/customers/customers";
import { Faq } from "./(sections)/faq/faq";
import { Hero } from "./(sections)/hero";
import { HomeJsonLd } from "./(sections)/home-json-ld";
import { Services } from "./(sections)/services/services";
import { WhyUs } from "./(sections)/why-us/why-us";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeJsonLd />
      <div className="mx-auto max-w-7xl px-[6vw] xl:px-12">
        <Hero />
        <Services />
        <Contact />
        <WhyUs />
        <Customers />
        <Faq />
      </div>
    </main>
  );
}
