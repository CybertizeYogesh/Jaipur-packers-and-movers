import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { site } from "@/utils/siteData";

export default function ContactCards() {
  const cards = [
    { title: "Our Address", icon: MdLocationOn, text: site.address, href: null },
    { title: "Phone Number", icon: FaPhoneAlt, text: `${site.phone}, ${site.phoneAlt}`, href: site.phoneHref },
    { title: "Email Us", icon: MdEmail, text: site.email, href: site.emailHref },
    { title: "Business Hours", icon: FaClock, text: site.hours, href: null }
  ];

  return (
    <div className="contact-cards">
      {cards.map((card) => {
        const Icon = card.icon;
        const content = (
          <>
            <Icon />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </>
        );
        return card.href ? (
          <a href={card.href} className="contact-card" key={card.title}>
            {content}
          </a>
        ) : (
          <div className="contact-card" key={card.title}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
