import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let count = 0;
  let [coun, setCount] = React.useState(count);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>
        {
        setCount(coun+1)}}>+</button>
      <span data-cy="task-counter-value">{coun}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>
        {if(coun>0){
        setCount(coun-1)}
        }
        }>-</button>
    </div>
  );
};

export default Counter;
