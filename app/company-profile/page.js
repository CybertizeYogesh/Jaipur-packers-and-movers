import Image from "next/image";
import { FaAward, FaCertificate, FaHandshake, FaShieldAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import { PageBanner } from "@/components/HeroBanner";
import MotionReveal from "@/components/MotionReveal";
import StatsCounter from "@/components/StatsCounter";
import pageStyles from "@/styles/Page.module.css";

export const metadata = {
  title: "Company Profile",
  description: "Overview of Jaipur Packers And Movers, our moving network, achievements, certificates, and service strengths.",
  alternates: { canonical: "/company-profile" }
};

export default function CompanyProfilePage() {
  return (
    <>
      <PageBanner
        title="Company"
        accent="Profile"
        description="Safe and secure movers with a full safety focus on your movables and timely delivery."
      />
      <section className="section">
        <div className="container">
          <div className={pageStyles.contentGrid}>
            <MotionReveal variant="fadeRight">
              <Image src="/images/packers-and-movers.png" alt="Company profile" width={540} height={520} />
            </MotionReveal>
            <MotionReveal className={pageStyles.textBlock} variant="fadeLeft">
              <h2>Overview</h2>
              <p>
                Jaipur Packers And Movers provides household shifting, office relocation, car carriers, warehousing,
                loading unloading, and transportation services for local and domestic moving requirements.
              </p>
              <p>
                Our team is trained to manage packing, moving, loading, route planning, and customer coordination with
                the goal of safe delivery and high customer satisfaction.
              </p>
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
            <h2>Achievements</h2>
            <h3>Professional moving standards</h3>
          </div>
          <div className="grid four">
            {[
              ["Government Registered", FaCertificate],
              ["ISO Certified Service", FaAward],
              ["Reliable Moving Team", FaShieldAlt],
              ["Customer First Support", FaHandshake]
            ].map(([title, Icon]) => (
              <MotionReveal className="contact-card" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>Structured service, trained staff, and careful handling for every moving requirement.</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
