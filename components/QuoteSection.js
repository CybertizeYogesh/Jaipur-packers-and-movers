import QuoteForm from "@/components/QuoteForm";
import styles from "@/styles/Form.module.css";

export default function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <div className="container">
        <div className="site-heading">
          <h2 style={{ color: "#fff" }}>Get a Quote</h2>
          <h3 style={{ color: "#fff" }}>Fast response for your shifting needs</h3>
        </div>
        <div className={styles.quoteGrid}>
          <QuoteForm />
          <div className={styles.welcome}>
            <h3>
              Welcome to
              <br />
              Jaipur Packers And Mover
            </h3>
            <p>
              Our Home, Office, Car, Bike Moving Company Jaipur Packers And Mover is one of the popular and old moving
              companies in Jaipur, Delhi, Gurgaon, and all over India with metro city support.
            </p>
            <p>
              We provide almost all types of packing and moving services. Our staff and workers are experienced and
              trained enough to offer reliable relocation services for homes, offices, vehicles, and goods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
