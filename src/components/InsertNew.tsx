import styles from "./InsertNew.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

interface InsertNewProps {
  onSubmit: (event: FormEvent , taskName: string) =>void
}

export function InsertNew({ onSubmit }: InsertNewProps) {
  const [newTask, setNewTask] = useState("");

  function emitCreateTaskEvent(event:FormEvent) {
    onSubmit(event, newTask);
    // setting input value to empty
    setNewTask("");
  }

  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  return (
    <form onSubmit={emitCreateTaskEvent} className={styles.newTask}>
      <input
        className={styles.input}
        onChange={handleNewTaskChange}
        placeholder="Add a new task"
        value={newTask}
        required
      ></input>

      <button className={styles.createButton} title="Create task">
        <p className={styles.newTaskPlaceholder}>Create</p>
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
