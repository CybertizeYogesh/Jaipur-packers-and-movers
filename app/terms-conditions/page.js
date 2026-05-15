import { PageBanner } from "@/components/HeroBanner";
import { site } from "@/utils/siteData";
import pageStyles from "@/styles/Page.module.css";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Jaipur Packers And Movers website and relocation enquiry services.",
  alternates: { canonical: "/terms-conditions" }
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageBanner title="Terms" accent="Conditions" description="Website and service enquiry terms for Jaipur Packers And Movers." />
      <section className="section">
        <div className={`container-narrow ${pageStyles.policy}`}>
          <p>
            By using this website, you agree to use the information and enquiry forms for genuine packing and moving
            service requirements.
          </p>
          <h2>Service Quotes</h2>
          <p>
            Quotes depend on item volume, distance, floor access, packing requirements, vehicle type, manpower, and
            service availability. Final pricing may be confirmed after survey or detailed discussion.
          </p>
          <h2>Customer Responsibilities</h2>
          <ul>
            <li>Provide accurate pickup, delivery, contact, and item information.</li>
            <li>Keep valuables, documents, cash, and personal essentials with you.</li>
            <li>Inform the team about fragile, high value, or restricted items before packing.</li>
          </ul>
          <h2>Contact</h2>
          <p>
            For any questions, contact {site.name} at <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
