import ContactCards from "@/components/ContactCards";
import { PageBanner } from "@/components/HeroBanner";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/utils/siteData";

export const metadata = {
  title: "Contacting Jaipur Packers and Movers: Reach Out Today",
  description:
    "Contact Jaipur Packers and Movers for quotes, moving support, local shifting, office relocation, car transport, and packing services.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact"
        accent="Us"
        description="Contacting us is easy. Use the information below and our friendly staff will be happy to assist you."
      />
      <section className="section gray">
        <div className="container">
          <ContactCards />
        </div>
      </section>
      <section className="section" style={{ background: "rgba(185, 185, 185, 0.4)" }}>
        <div className="container">
          <div className="grid two" style={{ alignItems: "center" }}>
            <div>
              <div className="site-heading left">
                <h2>Our Address</h2>
                <h3>Reach out today</h3>
              </div>
              <p className="lead">{site.name}, {site.address}</p>
              <p className="lead">
                <a href={site.phoneHref}>{site.phone}</a>, <a href={site.phoneAltHref}>{site.phoneAlt}</a>
              </p>
              <p className="lead">
                <a href={site.emailHref}>{site.email}</a>
              </p>
            </div>
            <QuoteForm mode="contact" />
          </div>
        </div>
      </section>
      <iframe
        className="map-frame"
        title="Jaipur Packers and Movers location"
        loading="lazy"
        src="https://maps.google.com/maps?width=1482&height=303&hl=en&q=jaipur%20packers%20and%20movers%20kalwar%20road&t=&z=14&ie=UTF8&iwloc=B&output=embed"
      />
    </>
  );
}
