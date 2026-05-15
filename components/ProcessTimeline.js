import { processSteps } from "@/utils/siteData";
import styles from "@/styles/Page.module.css";

export default function ProcessTimeline({ steps = processSteps }) {
  return (
    <div className={styles.process}>
      {steps.map((step, index) => (
        <div className={styles.processItem} key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{step}</h3>
        </div>
      ))}
    </div>
  );
}
