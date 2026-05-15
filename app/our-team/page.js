import Image from "next/image";
import { PageBanner } from "@/components/HeroBanner";
import MotionReveal from "@/components/MotionReveal";

export const metadata = {
  title: "Our Team",
  description: "Meet the trained and experienced relocation team behind Jaipur Packers And Movers.",
  alternates: { canonical: "/our-team" }
};

const team = [
  { name: "Moving Coordinator", role: "Survey and planning support" },
  { name: "Packing Supervisor", role: "Packing quality and labeling" },
  { name: "Transport Manager", role: "Vehicle and route coordination" },
  { name: "Customer Support", role: "Move updates and assistance" }
];

export default function OurTeamPage() {
  return (
    <>
      <PageBanner
        title="Our"
        accent="Team"
        description="Experienced staff, trained labor, and responsive coordinators for safe relocation services."
      />
      <section className="section">
        <div className="container">
          <div className="grid four">
            {team.map((member, index) => (
              <MotionReveal className="contact-card" delay={index * 0.06} key={member.name}>
                <Image
                  src="/images/customer.webp"
                  alt={member.name}
                  width={110}
                  height={110}
                  style={{ borderRadius: "50%", margin: "0 auto 14px" }}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
