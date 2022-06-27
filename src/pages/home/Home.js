import { useAuthContext } from '../../hooks/useAuthContext'

import { TransactionForm } from "./TransactionForm";

import styles from "./Home.module.css";

export function Home() {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>transacion list</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
