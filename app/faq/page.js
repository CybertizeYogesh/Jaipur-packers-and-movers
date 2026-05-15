import FAQAccordion from "@/components/FAQAccordion";
import { PageBanner } from "@/components/HeroBanner";
import { faqs } from "@/utils/siteData";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Jaipur Packers And Movers services, booking, packing, and transportation.",
  alternates: { canonical: "/faq" }
};

export default function FAQPage() {
  return (
    <>
      <PageBanner
        title="Frequently Asked"
        accent="Questions"
        description="Helpful answers for customers planning local shifting, office relocation, car transport, or household moving."
      />
      <section className="section">
        <div className="container-narrow">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
