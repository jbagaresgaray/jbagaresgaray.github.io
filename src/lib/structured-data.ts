import { faqs } from "@/components/landing/Faq";
import { stack } from "@/components/landing/Hero";
import { services } from "@/components/landing/Services";
import { site } from "@/lib/site";

// JSON-LD for the home page, built from the same data the sections render so the
// structured data can't drift from the visible content.
export function homePageJsonLd() {
  const personId = `${site.url}/#person`;
  const websiteId = `${site.url}/#website`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profile`,
        url: site.url,
        name: site.title,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        alternateName: "Philip Garay",
        url: site.url,
        image: `${site.url}/images/philip-portrait.jpg`,
        jobTitle: site.jobTitle,
        description: site.description,
        email: `mailto:${site.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location.city,
          addressCountry: site.location.country,
        },
        sameAs: site.sameAs,
        knowsAbout: stack.flatMap((group) => group.skills),
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: `${service.promise} ${service.deliverables.join("; ")}.`,
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        url: site.url,
        isPartOf: { "@id": websiteId },
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  // Escape "<" so content can never close the <script> tag early.
  return JSON.stringify(graph).replace(/</g, "\\u003c");
}
