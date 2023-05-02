import styles from "./Counter.module.css";

export function Counter({ completedCount, totalCount }: {completedCount:number, totalCount:number}) {
  return (
    <div className={styles.info}>
      <div className={styles.countCreatedTasks}>
        Tasks to do <span>{totalCount}</span>
      </div>

      <div className={styles.countDoneTasks}>
        Completed today
        <span>
          {completedCount} out of {totalCount}
        </span>
      </div>
    </div>
  );
}
