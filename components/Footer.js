import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFacebookF, FaLinkedinIn, FaLongArrowAltRight, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { navLinks, services, site } from "@/utils/siteData";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Transportation", href: "/services/transportation" },
    { label: "Local Shifting", href: "/services/local-shifting" },
    { label: "Loading Unloading", href: "/services/loading-unloading" }
  ];
  const serviceLinks = services.slice(2, 8).map((service) => ({
    label: service.menuTitle,
    href: `/services/${service.slug}`
  }));

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.widget}>
              <Link className={styles.logo} href="/">
                <Image src="/images/logo.png" alt={site.name} width={260} height={120} />
              </Link>
              <p>We offer end to end service and you do not have to get concerned about anything.</p>
              <ul className={styles.contactList}>
                <li>
                  <FaPhoneAlt />
                  <span>
                    {site.phone}
                    <br />
                    {site.phoneAlt}
                  </span>
                </li>
                <li>
                  <FaClock />
                  <span>{site.hours}</span>
                </li>
              </ul>
            </div>
            <div className={styles.widget}>
              <h2 className={styles.title}>Quick links</h2>
              <ul className={styles.links}>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <FaLongArrowAltRight /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.widget}>
              <h2 className={styles.title}>Quick links</h2>
              <ul className={styles.links}>
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <FaLongArrowAltRight /> {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/company-profile">
                    <FaLongArrowAltRight /> Overview
                  </Link>
                </li>
                <li>
                  <Link href="/mission-vision">
                    <FaLongArrowAltRight /> Mission & Vision
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.widget}>
              <h2 className={styles.title}>Get In Touch</h2>
              <p>
                <MdLocationOn /> {site.address}
              </p>
              <p>
                <MdEmail /> {site.email}
              </p>
              <h3 className={styles.title}>We're Social</h3>
              <div className={styles.social}>
                <Link href={site.facebook} target="_blank" aria-label="Facebook">
                  <FaFacebookF />
                </Link>
                <Link href={site.whatsapp} target="_blank" aria-label="WhatsApp">
                  <FaWhatsapp />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <FaTwitter />
                </Link>
                <Link href={site.linkedin} target="_blank" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <div className={styles.bottomLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-conditions">Terms & Conditions</Link>
              <span>|</span>
              <Link href="/sitemap.xml">SiteMap</Link>
            </div>
            <p className={styles.credit}>
              Designed by <span>Cybertize Growth</span> © 2026 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
