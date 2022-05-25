import React,{useState} from "react";
import TaskHeader from './TaskHeader/TaskHeader'
import Tasks from './Tasks/Tasks'
import AddTask from './AddTask/AddTask'
import styles from "./taskApp.module.css";
import Data from '../data/tasks.json'
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
const [todo, setTodo]=useState([...Data])
console.log(todo)
function Del(obj){
  setTodo(todo.filter(e=>e.id!==obj.id))
}
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader todo={todo}/>
      <AddTask setTodo={setTodo} todo={todo}/>
      <Tasks  todo={todo} Del={Del} setTodo={setTodo}/>
    </div>
  );
};

export default TaskApp;
