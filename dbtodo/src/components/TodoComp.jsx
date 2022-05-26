import React from "react";
import Styles from "./todoComp.module.css";
const TodoComp = (prop) => {
  return (
    <div>
      <h4> Show completed Todo</h4>
      {prop.completed.map((e, index) => (
        <div key={index} style={Styles.todoCitem}>
          <p className={Styles.dashed}>
            
            <input type="checkbox" checked={true} name="" id="" /> {e.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoComp;
