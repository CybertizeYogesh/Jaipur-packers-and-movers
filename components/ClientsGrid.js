import Image from "next/image";
import { clients } from "@/utils/siteData";
import styles from "@/styles/Cards.module.css";

export default function ClientsGrid() {
  return (
    <div className={styles.clientGrid}>
      {clients.map((client) => (
        <div className={styles.client} key={client.name}>
          <Image src={client.image} alt={client.name} width={170} height={90} />
        </div>
      ))}
    </div>
  );
}
