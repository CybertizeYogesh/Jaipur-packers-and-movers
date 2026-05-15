import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaPhoneAlt, FaStar } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { PageBanner } from "@/components/HeroBanner";
import MotionReveal from "@/components/MotionReveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import QuoteSection from "@/components/QuoteSection";
import { ServiceCard } from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import { faqs, getService, relatedServices, serviceHighlights, services, site } from "@/utils/siteData";
import pageStyles from "@/styles/Page.module.css";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Jaipur`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Jaipur Packers And Movers`,
      description: service.summary,
      images: [service.image]
    }
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const serviceFaqs = [
    {
      question: `How does ${service.title.toLowerCase()} work?`,
      answer:
        "The move starts with your requirement, item list or survey, quotation, packing plan, loading, transport, unloading, and final support after delivery."
    },
    {
      question: `Is ${service.title.toLowerCase()} available outside Jaipur?`,
      answer:
        "Yes. Jaipur Packers And Movers supports Jaipur and major all India routes depending on service type, vehicle availability, and move schedule."
    },
    ...faqs.slice(0, 3)
  ];

  return (
    <>
      <PageBanner
        title={service.title.split(" ")[0]}
        accent={service.title.split(" ").slice(1).join(" ")}
        description={service.summary}
      />
      <section className="section">
        <div className="container">
          <div className={pageStyles.contentGrid}>
            <MotionReveal variant="fadeRight">
              <Image src={service.image} alt={service.title} width={640} height={460} style={{ width: "100%", height: "auto" }} />
            </MotionReveal>
            <MotionReveal className={pageStyles.textBlock} variant="fadeLeft">
              <h2>{service.title}</h2>
              <p>{service.intro}</p>
              <p>{service.details}</p>
              <ul className={pageStyles.tickGrid}>
                {serviceHighlights.map((item) => (
                  <li key={item}>
                    <FaStar /> {item}
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="site-heading">
            <h2>Process</h2>
            <h3>Simple moving steps</h3>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={pageStyles.helpGrid}>
            <MotionReveal className={pageStyles.needHelp}>
              <FaPhoneAlt />
              <h3>Need help?</h3>
              <p>Get in touch with our award-winning support team 24/7</p>
              <Link className="button" href="/contact">
                Get In Touch
              </Link>
            </MotionReveal>
            <MotionReveal className={pageStyles.related} variant="fadeLeft">
              <h3>Related Services</h3>
              <ul>
                {relatedServices(service.slug).map((item, index) => (
                  <li key={item.slug}>
                    <Link href={`/services/${item.slug}`}>
                      <span>{index + 1}</span> {item.menuTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container-narrow">
          <div className="site-heading">
            <h2>FAQ</h2>
            <h3>{service.title} questions</h3>
          </div>
          <FAQAccordion items={serviceFaqs} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="site-heading">
            <h2>What Our</h2>
            <h3>Customers Saying</h3>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <QuoteSection />

      <section className="section">
        <div className="container">
          <div className="site-heading">
            <h2>Related Services</h2>
            <h3>More relocation solutions</h3>
          </div>
          <div className="grid three">
            {relatedServices(service.slug).slice(0, 3).map((item, index) => (
              <ServiceCard service={item} index={index} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
      <CTASection title={`Book ${service.title}`} text={`Call ${site.phone} for a quick estimate and moving support.`} />
    </>
  );
}
