import { PageBanner } from "@/components/HeroBanner";
import { site } from "@/utils/siteData";
import pageStyles from "@/styles/Page.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Jaipur Packers And Movers website and enquiry forms.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy" accent="Policy" description="How we handle enquiry information shared through this website." />
      <section className="section">
        <div className={`container-narrow ${pageStyles.policy}`}>
          <p>
            Jaipur Packers And Movers respects customer privacy. Information submitted through enquiry, contact, quote,
            or callback forms is used only to understand your moving requirement and respond to your request.
          </p>
          <h2>Information We Collect</h2>
          <p>We may collect name, phone number, email address, pickup city, delivery city, moving date, selected service, and message details.</p>
          <h2>How We Use Information</h2>
          <ul>
            <li>To contact you about packing and moving services.</li>
            <li>To prepare estimates and coordinate relocation support.</li>
            <li>To improve customer service and website experience.</li>
          </ul>
          <h2>Contact</h2>
          <p>
            For privacy questions, contact us at <a href={site.emailHref}>{site.email}</a> or <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
