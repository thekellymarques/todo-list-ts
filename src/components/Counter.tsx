import styles from "./Counter.module.css";

export function Counter({ completedCount, totalCount }: {completedCount:number, totalCount:number}) {
  return (
    <div className={styles.info}>
      <div className={styles.countCreatedTasks}>
        Tarefas criadas <span>{totalCount}</span>
      </div>

      <div className={styles.countDoneTasks}>
        Concluídas
        <span>
          {completedCount} de {totalCount}
        </span>
      </div>
    </div>
  );
}
