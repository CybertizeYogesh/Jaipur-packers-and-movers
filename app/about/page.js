import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ClientsGrid from "@/components/ClientsGrid";
import CTASection from "@/components/CTASection";
import { PageBanner } from "@/components/HeroBanner";
import MotionReveal from "@/components/MotionReveal";
import StatsCounter from "@/components/StatsCounter";
import { serviceHighlights } from "@/utils/siteData";
import pageStyles from "@/styles/Page.module.css";

export const metadata = {
  title: "Get to Know Jaipur Packers and Movers",
  description:
    "Learn about Jaipur Packers and Movers, our experienced staff, safe moving process, customer support, and reliable relocation services.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About"
        accent="Us"
        description="We have a team of highly trained professionals, who take special measures to assure the safety of the goods and proper execution of services."
      />
      <section className="section">
        <div className="container">
          <div className={pageStyles.contentGrid}>
            <MotionReveal variant="fadeRight">
              <Image src="/images/abt-img.png" alt="About Jaipur Packers and Movers" width={560} height={500} />
            </MotionReveal>
            <MotionReveal className={pageStyles.textBlock} variant="fadeLeft">
              <h2>About Us</h2>
              <p>
                Our reputation is rightly based on the quality of the packing and moving services we offer. We have a
                team of highly trained professionals, who take special measures to assure the safety of the goods and
                ensure proper execution of the services and conveniences of the customers.
              </p>
              <p>
                The execution time is carefully planned so your shifting remains fast, safe, and convenient. We provide
                moving services with attention to precious time, careful packing, and reliable delivery.
              </p>
              <p>
                Jaipur Packers And Movers has skilled people in the packing and moving industry. We provide warehousing,
                car carriers, office relocation, and household shifting services to make your moving easier.
              </p>
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
      <section className={pageStyles.statsBand}>
        <div className="container">
          <StatsCounter />
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="site-heading">
            <h2>What Makes Us</h2>
            <h3>Special</h3>
          </div>
          <div className="grid three">
            {["Customer Satisfaction", "Customer Support", "Reliability & Punctuality"].map((title) => (
              <MotionReveal className="contact-card" key={title}>
                <h3>{title}</h3>
                <p>
                  We are committed to clear communication, safe packing, transparent service, and timely moving support
                  for every customer.
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="site-heading">
            <h2>Our Clients</h2>
            <h3>Checkout our latest Clients</h3>
          </div>
          <ClientsGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
