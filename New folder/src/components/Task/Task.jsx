import React from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter';

const Task = (prop) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" onChange={(e)=>{
        prop.setTodo(prop.todo.map(e=>e.id===prop.obj.id?{...e,done:e.done?false:true}:e))
      
      }
        }
      checked={prop.obj.done} 
      />
      <div data-cy="task-text">{prop.obj.text}</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" onClick={()=>{
        prop.Del(prop.obj)
        console.log(prop.obj)
      }
        }>x</button>
    </li>
     
  );
};

export default Task;
