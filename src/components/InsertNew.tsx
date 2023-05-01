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
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        required
      ></input>

      <button className={styles.createButton} title="Criar tarefa">
        <p className={styles.newTaskPlaceholder}>Criar</p>
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
