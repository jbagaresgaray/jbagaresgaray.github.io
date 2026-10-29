import SiteHeader from "@/components/landing/SiteHeader";
import Hero from "@/components/landing/Hero";
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
        className="skip"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        {/* The desk of live apps, then what I do, the work itself, why one person, how, and who. */}
        <Hero />
        <Services />
        <Work />
        <WhyMe />
        <Process />
        <About />
        <Faq />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
