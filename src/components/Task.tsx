import styles from "./Task.module.css";
import { CheckCircle, Circle, Trash } from "phosphor-react";
import { TaskData } from "../domain/TaskData";
import { onComplete, onDelete } from "./List";

interface TaskProps {
  task: TaskData;
  onDelete: onDelete,
  onComplete: onComplete
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  function CheckBox({ isChecked }: {isChecked: boolean}) {
    if (isChecked) {
      return <CheckCircle size={18} />;
    } else {
      return <Circle size={18} />;
    }
  }

  function handleComplete() {
    onComplete( task.id, !task.isComplete,);
  }

  return (
    <div className={task.isComplete ? styles.taskComplete : styles.task}>
      <button
        className={task.isComplete ? styles.checkButtonComplete : styles.checkButton}
        title="Toggle task completion"
        onClick={handleComplete}
      >
        <div>{task.isComplete}</div>
        <CheckBox isChecked={task.isComplete} />
      </button>

      <p>{task.content}</p>

      <button
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)} 
        title="Delete task"
      >
        <Trash size={18} />
      </button>
    </div>
  );
}
