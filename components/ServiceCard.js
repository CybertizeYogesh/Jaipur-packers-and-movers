import Image from "next/image";
import Link from "next/link";
import MotionReveal from "@/components/MotionReveal";
import styles from "@/styles/Cards.module.css";

export function OverlayServiceCard({ service, index = 0 }) {
  return (
    <MotionReveal delay={index * 0.08} className={styles.serviceOverlay}>
      <Link href={`/services/${service.slug}`} aria-label={service.title}>
        <Image src={service.image} alt={service.title} width={520} height={360} sizes="(max-width: 768px) 90vw, 25vw" />
        <span>{service.displayTitle || service.menuTitle}</span>
      </Link>
    </MotionReveal>
  );
}

export function ServiceCard({ service, index = 0 }) {
  return (
    <MotionReveal delay={index * 0.06} className={styles.serviceCard}>
      <div className={styles.serviceCardImage}>
        <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className={styles.serviceCardBody}>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <Link className="button" href={`/services/${service.slug}`}>
          Read More
        </Link>
      </div>
    </MotionReveal>
  );
}
