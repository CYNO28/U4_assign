import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = (prop) => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;
  let [tt,settt]=React.useState(totalTask)
  let [uc,setuc]=React.useState(unCompletedTask)
  tt=prop.todo.length
  uc=prop.todo.filter(e=>e.done===false).length

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List </h1>
      <b data-cy="header-remaining-task">You have {uc} of  </b>
      <b data-cy="header-total-task"> {tt} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
