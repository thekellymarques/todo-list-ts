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
        <p className={styles.p1}>You don't have any tasks registered yet</p>
        <p className={styles.p2}>Create tasks and organize your to-do items</p>
      </div>
    );
  }
  return null;
}
