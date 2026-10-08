import SiteHeader from "@/components/landing/SiteHeader";
import Hero from "@/components/landing/Hero";
import ClientStrip from "@/components/landing/ClientStrip";
import WhyMe from "@/components/landing/WhyMe";
import Services from "@/components/landing/Services";
import Work from "@/components/landing/Work";
import Process from "@/components/landing/Process";
import About from "@/components/landing/About";
import Faq from "@/components/landing/Faq";
import ContactSection from "@/components/landing/ContactSection";
import SiteFooter from "@/components/landing/SiteFooter";
import { homePageJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      {/* Structured data for search engines: WebSite, ProfilePage, Person and FAQPage. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: homePageJsonLd() }} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ClientStrip />
        <WhyMe />
        <Services />
        <Work />
        <Process />
        <About />
        <Faq />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
