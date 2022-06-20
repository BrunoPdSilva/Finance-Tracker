import { TransactionForm } from "./TransactionForm";

import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>transacion list</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
}
