import Link from "next/link";
import MotionReveal from "@/components/MotionReveal";
import styles from "@/styles/Page.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <MotionReveal className={styles.heroContent} variant="fadeLeft">
        <h1>
          MOVING MADE
          <br />
          <strong>EASIER WITH US</strong>
        </h1>
        <Link className="button" href="/contact">
          Enquire Now
        </Link>
      </MotionReveal>
    </section>
  );
}

export function PageBanner({ title, accent, description }) {
  return (
    <section className={styles.pageBanner}>
      <MotionReveal>
        <h1>
          {title} {accent ? <span>{accent}</span> : null}
        </h1>
        {description ? <p>{description}</p> : null}
      </MotionReveal>
    </section>
  );
}
