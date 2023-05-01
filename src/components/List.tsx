import { TaskData } from "../domain/TaskData";
import { Task } from "./Task";

export type onComplete = (taskId:string, complete:boolean) =>void
export type onDelete = (taskId:string) => void

interface ListProps {
  tasks: TaskData[],
  show: boolean,
  onDelete: onDelete
  onComplete: onComplete
}

export function List({ tasks, onDelete, onComplete, show }: ListProps) {
  if (show) {
    return (
      <div>
        {tasks
          .sort((taskA, taskB) =>
            taskA.isComplete > taskB.isComplete ? 1 : -1
          )
          .map((task: TaskData) => {
            return (
              <Task
                key={task.id}
                task ={task}
                onDelete={() => onDelete(task.id)}
                onComplete={onComplete}
              />
            );
          })}
      </div>
    );
  }
  return null
}
