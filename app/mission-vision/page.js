import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import { PageBanner } from "@/components/HeroBanner";
import MotionReveal from "@/components/MotionReveal";

export const metadata = {
  title: "Mission & Vision",
  description: "Mission and vision of Jaipur Packers And Movers for safe, transparent, and customer focused relocation.",
  alternates: { canonical: "/mission-vision" }
};

export default function MissionVisionPage() {
  return (
    <>
      <PageBanner
        title="Mission"
        accent="Vision"
        description="We are committed to making relocation simpler, safer, and more dependable for every customer."
      />
      <section className="section">
        <div className="container">
          <div className="grid three">
            {[
              {
                title: "Our Mission",
                icon: FaBullseye,
                text: "To provide excellent packing and moving services that protect customer goods, save time, and deliver value."
              },
              {
                title: "Our Vision",
                icon: FaEye,
                text: "To be known as a trusted relocation company across Jaipur and India through safety, transparency, and support."
              },
              {
                title: "Our Values",
                icon: FaHandsHelping,
                text: "Customer satisfaction, reliability, punctuality, careful handling, fair pricing, and responsive communication."
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <MotionReveal className="contact-card" key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
