import Link from "next/link";
import { PageBanner } from "@/components/HeroBanner";
import { cities } from "@/utils/siteData";

export const metadata = {
  title: "Location Pages",
  description: "Packers and movers location pages for Jaipur, Delhi, Mumbai, Bangalore, Pune, and Hyderabad.",
  alternates: { canonical: "/locations" }
};

export default function LocationsPage() {
  return (
    <>
      <PageBanner
        title="Service"
        accent="Locations"
        description="SEO location pages for major cities served by Jaipur Packers And Movers."
      />
      <section className="section">
        <div className="container">
          <div className="grid three">
            {cities.map((city) => (
              <Link className="contact-card" href={`/locations/${city.slug}`} key={city.slug}>
                <h3>{city.title}</h3>
                <p>{city.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
