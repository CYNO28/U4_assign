import React from "react";
import styles from "./tasks.module.css";
import Task from  '../Task/Task'
const Tasks = (prop) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
     
     {prop.todo.map((e)=>(<div key={e.id}>
       <Task  obj={e} Del={prop.Del} setTodo={prop.setTodo} todo={prop.todo}/>
     
     </div>))}
    


      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
