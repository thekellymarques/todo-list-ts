import { ClipboardText } from "phosphor-react";

import styles from "./Placeholder.module.css";

interface PlaceholderProps {
show: boolean;
}

export function Placeholder({show}: PlaceholderProps) {
  if (show) {
    return (
      <div className={styles.emptyTaskList}>
        <div className={styles.clipboardImg}>
          <ClipboardText size={60} weight="light" />
        </div>
        <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
        <p className={styles.p2}>Crie tarefas e organize seus itens a fazer </p>
      </div>
    );
  }
  return null;
}
