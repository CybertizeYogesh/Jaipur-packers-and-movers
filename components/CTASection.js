import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { site } from "@/utils/siteData";

export default function CTASection({ title = "Need help?", text = "Get in touch with our award-winning support team 24/7" }) {
  return (
    <section className="cta-strip">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link className="button secondary" href="/contact">
            Get In Touch
          </Link>
          <a className="button dark" href={site.phoneHref}>
            <FaPhoneAlt /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
