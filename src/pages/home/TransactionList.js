import { useFirestore } from "../../hooks/useFirestore";

import styles from "./Home.module.css";

export function TransactionList({ transactions }) {
  const { deleteDocument, response } = useFirestore("transactions");
  console.log(response);

  return (
    <ul className={styles.transactions}>
      {transactions.map(({ id, name, amount }) => (
        <li key={id}>
          <p className={styles.name}>{name}</p>
          <p className={styles.amount}>R${amount}</p>
          <button onClick={() => deleteDocument(id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
