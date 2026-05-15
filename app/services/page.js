import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { PageBanner } from "@/components/HeroBanner";
import QuoteSection from "@/components/QuoteSection";
import { ServiceCard } from "@/components/ServiceCard";
import { faqs, services } from "@/utils/siteData";

export const metadata = {
  title: "Packing and Moving Services",
  description:
    "Explore household shifting, office relocation, car transportation, bike transport, loading unloading, warehousing, and domestic relocation services.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our"
        accent="Services"
        description="We provide prompt, safe, and cost effective moving services according to client needs."
      />
      <section className="section">
        <div className="container">
          <div className="site-heading">
            <h2>Services</h2>
            <h3>Choose the right relocation support</h3>
          </div>
          <div className="grid three">
            {services.map((service, index) => (
              <ServiceCard service={service} index={index} key={service.slug} />
            ))}
          </div>
        </div>
      </section>
      <QuoteSection />
      <section className="section gray">
        <div className="container-narrow">
          <div className="site-heading">
            <h2>FAQ</h2>
            <h3>Service questions</h3>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
