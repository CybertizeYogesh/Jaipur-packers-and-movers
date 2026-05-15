import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { PageBanner } from "@/components/HeroBanner";
import ProcessTimeline from "@/components/ProcessTimeline";
import QuoteSection from "@/components/QuoteSection";
import { ServiceCard } from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import { cities, getCity, services } from "@/utils/siteData";
import pageStyles from "@/styles/Page.module.css";

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: city.title,
    description: city.summary,
    alternates: { canonical: `/locations/${city.slug}` },
    openGraph: {
      title: city.title,
      description: city.summary
    }
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <>
      <PageBanner title="Packers and Movers" accent={city.city} description={city.summary} />
      <section className="section">
        <div className="container-narrow">
          <div className={pageStyles.textBlock}>
            <h2>{city.title}</h2>
            <p>{city.intro}</p>
            <p>
              Customers in {city.city} can request home shifting, office relocation, local goods transport, vehicle
              movement, packing unpacking, loading unloading, and warehouse support with the same reliable moving
              process used across the website.
            </p>
          </div>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="site-heading">
            <h2>Services</h2>
            <h3>Available in {city.city}</h3>
          </div>
          <div className="grid three">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard service={service} index={index} key={service.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="site-heading">
            <h2>Process</h2>
            <h3>How we manage your move</h3>
          </div>
          <ProcessTimeline />
        </div>
      </section>
      <section className="section gray">
        <div className="container-narrow">
          <div className="site-heading">
            <h2>FAQ</h2>
            <h3>{city.city} moving questions</h3>
          </div>
          <FAQAccordion items={city.faqs} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="site-heading">
            <h2>Testimonials</h2>
            <h3>Customer experience</h3>
          </div>
          <TestimonialSlider />
        </div>
      </section>
      <QuoteSection />
      <CTASection title={`Packers and Movers ${city.city}`} text="Get a quick quote for your local or domestic shifting requirement." />
    </>
  );
}
