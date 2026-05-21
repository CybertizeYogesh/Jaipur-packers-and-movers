"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { navLinks, site } from "@/utils/siteData";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileDropdown("");
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const isActive = (href, children = []) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href) || children.some((child) => pathname.startsWith(child.href));
  };

  return (
    <>
      <div className={styles.topStrip} />
      <div className={styles.masthead}>
        <div className="container">
          <div className={styles.contactRow}>
            <Link className={styles.logoLink} href="/" aria-label={`${site.name} home`}>
              <Image
                className={styles.logoBox}
                src="/images/packers-and-movers-logo.webp"
                alt={site.name}
                width={560}
                height={160}
                priority
              />
            </Link>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <p>
                  <MdLocationOn /> Address
                </p>
                <strong>{site.cityLine}</strong>
              </div>
              <div className={styles.contactItem}>
                <p>
                  <MdEmail /> Email Us
                </p>
                <strong>{site.email}</strong>
              </div>
              <div className={styles.contactItem}>
                <p>
                  <FaPhoneAlt /> Phone Number
                </p>
                <strong>{site.phone}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className={`${styles.navWrap} ${scrolled ? styles.scrolled : ""}`}>
        <div className="container">
          <div className={styles.navInner}>
            <button
              className={styles.menuToggle}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
            <nav className={`${styles.menu} ${open ? styles.open : ""}`} aria-label="Main navigation">
              <ul className={styles.menuList}>
                {navLinks.map((item) => {
                  const active = isActive(item.href, item.children);
                  const expanded = mobileDropdown === item.label;
                  return (
                    <li
                      className={`${styles.menuItem} ${expanded ? styles.open : ""}`}
                      key={item.label}
                    >
                      <Link
                        className={`${styles.menuLink} ${active ? styles.active : ""}`}
                        href={item.href}
                        onClick={(event) => {
                          if (item.children && window.innerWidth <= 768 && !expanded) {
                            event.preventDefault();
                            setMobileDropdown(item.label);
                          }
                        }}
                      >
                        {item.label}
                        {item.children ? <FaChevronDown className={styles.caret} /> : null}
                      </Link>
                      {item.children ? (
                        <ul className={styles.dropdown}>
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                className={pathname.startsWith(child.href) ? styles.active : ""}
                                href={child.href}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className={styles.navActions}>
              <Link className={styles.navButton} href="/contact">
                Get in touch
              </Link>
              <Link className={`${styles.navButton} ${styles.whatsapp}`} href={site.whatsapp} target="_blank">
                <FaWhatsapp /> WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
