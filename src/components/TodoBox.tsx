import { v4 as uuidv4 } from "uuid";
import { FormEvent, useState } from "react";
import { Counter } from "./Counter";

import styles from "./TodoBox.module.css";
import { Placeholder } from "./Placeholder";
import { List } from "./List";
import { InsertNew } from "./InsertNew";
import { TaskData } from "../domain/TaskData";

const list = [
  {
    id: 1,
    task: "",
    complete: true,
  },
];

export function TodoBox() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  // functions that modify the items array
  function createNewTask(event: FormEvent , taskName: string) {
    event.preventDefault();

    // adding task to array
    const task:TaskData = {
      id: uuidv4(),
      content: taskName,
      isComplete: false,
    };

    setTasks([...tasks, task]);
  }

  function deleteTask(taskId: string) {
    // return new list without the item
    const updatedTaskList = tasks.filter((task) => task.id !== taskId);

    // set the new list
    setTasks(updatedTaskList);
  }

  function toggleComplete(id: string, complete:boolean) {
    // change complete state from the task
    const newTaskList = tasks.map((item) => {
      if (item.id === id) {
        item.isComplete = complete;
      }
      return item;
    });

    setTasks(newTaskList);
  }

  // computed properties
  function totalCount() {
    // return total tasks count
    return tasks.length;
  }

  function completedCount() {
    // return only completed tasks count
    return tasks.filter((task) => task.isComplete === true).length;
  }

  return (
    <div className={styles.todoBox}>
      <InsertNew onSubmit={createNewTask} />
      <Counter totalCount={totalCount()} completedCount={completedCount()} />
      <Placeholder show={tasks.length === 0} />
      <List
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={toggleComplete}
        show={tasks.length > 0}
      />
    </div>
  );
}
