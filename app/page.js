import Image from "next/image";
import { FaBoxOpen, FaCheckCircle, FaCog, FaHeadset, FaMapMarkerAlt, FaShieldAlt, FaTruck, FaUserPlus } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import ClientsGrid from "@/components/ClientsGrid";
import FAQAccordion from "@/components/FAQAccordion";
import GalleryGrid from "@/components/GalleryGrid";
import { HomeHero } from "@/components/HeroBanner";
import MotionReveal from "@/components/MotionReveal";
import QuoteSection from "@/components/QuoteSection";
import { OverlayServiceCard, ServiceCard } from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import { faqs, features, homeCards, satisfaction, services, workItems } from "@/utils/siteData";
import cardStyles from "@/styles/Cards.module.css";
import pageStyles from "@/styles/Page.module.css";

export default function HomePage() {
  const featureIcons = [FaCog, FaCog, FaBoxOpen, MdLocalShipping, FaTruck, FaUserPlus];
  const satisfactionIcons = [FaCheckCircle, FaShieldAlt, FaMapMarkerAlt, FaTruck];

  return (
    <>
      <HomeHero />
      <section className={pageStyles.homeCardsWrap}>
        <div className="container">
          <div className={pageStyles.homeCards}>
            {homeCards.map((service, index) => (
              <OverlayServiceCard service={service} index={index} key={service.slug} />
            ))}
          </div>
          <div className={pageStyles.aboutGrid} style={{ marginTop: 50 }}>
            <MotionReveal className={pageStyles.aboutCopy} variant="fadeRight">
              <h2>WHO WE ARE</h2>
              <p className={pageStyles.sub}>About Us</p>
              <h3>
                Whether you require distribution or fulfillment, defined freight forwarding, or a complete supply chain
                solution, we are here for you.
              </h3>
              <p>
                Our reputation is rightly based on the quality of the packing and moving services we offer. We have a
                team of highly trained professionals, who take special measures to assure the safety of the goods and
                ensure proper execution of the services and conveniences of the customers.
              </p>
            </MotionReveal>
            <MotionReveal className={pageStyles.aboutImage} variant="zoomIn">
              <Image src="/images/packers-and-movers.webp" alt="Packers and movers team" width={360} height={360} />
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <MotionReveal className={pageStyles.satisfactionIntro}>
            <h2>Client Satisfaction Is Our Primary Focus</h2>
            <p>
              Always book best and trusted moving company if you want shifting your house. With 20 years plus working
              experience and 45k plus happy customers, we are a trusted moving company in your area.
            </p>
          </MotionReveal>
          <div className="grid four">
            {satisfaction.map((item, index) => {
              const Icon = satisfactionIcons[index];
              return (
                <MotionReveal className={cardStyles.satisfaction} delay={index * 0.08} key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className={pageStyles.featuresGrid}>
            <div>
              <div className="site-heading">
                <h2>Our Features</h2>
                <h3>Checkout our latest features</h3>
              </div>
              <div className={pageStyles.featureGrid}>
                {features.map((feature, index) => {
                  const Icon = featureIcons[index];
                  return (
                    <MotionReveal className={cardStyles.feature} delay={index * 0.05} key={feature.title}>
                      <span className={cardStyles.featureIcon}>
                        <Icon />
                      </span>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </MotionReveal>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="site-heading">
                <h2>Work</h2>
                <h3>The Work Life We Share</h3>
              </div>
              {workItems.map((item, index) => (
                <MotionReveal className={cardStyles.workItem} delay={index * 0.08} key={item.title}>
                  <div className={cardStyles.workIcon}>
                    <Image src={item.icon} alt="" width={54} height={54} />
                  </div>
                  <div className={cardStyles.workText}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={pageStyles.statsBand}>
        <div className="container">
          <StatsCounter />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="site-heading">
            <h2>Our Services</h2>
            <h3>Safe and reliable moving solutions</h3>
          </div>
          <div className="grid four">
            {services.slice(0, 8).map((service, index) => (
              <ServiceCard service={service} index={index} key={service.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section gray">
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
          <div className={pageStyles.clientsWrap}>
            <MotionReveal>
              <div className="site-heading left">
                <h2>Our Clients</h2>
                <h3>Checkout our latest Clients</h3>
              </div>
              <h2 className={pageStyles.pleasure}>
                Pleasure to
                <br />
                work with
              </h2>
            </MotionReveal>
            <ClientsGrid />
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="site-heading">
            <h2>Gallery</h2>
            <h3>Moving work and transport views</h3>
          </div>
          <GalleryGrid />
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="site-heading">
            <h2>FAQ</h2>
            <h3>Helpful answers before you move</h3>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
