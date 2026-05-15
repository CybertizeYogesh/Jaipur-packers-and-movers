"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
import { site } from "@/utils/siteData";
import styles from "@/styles/Floating.module.css";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div className={styles.progress} style={{ scaleX }} />
      <div className={styles.floating}>
        <a className={`${styles.floatButton} ${styles.whatsapp}`} href={site.whatsapp} target="_blank" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a className={`${styles.floatButton} ${styles.call}`} href={site.phoneHref} aria-label="Call now">
          <FaPhoneAlt />
        </a>
      </div>
      <button
        className={`${styles.backTop} ${show ? styles.show : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </>
  );
}
