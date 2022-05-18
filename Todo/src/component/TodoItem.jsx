import React,{useState} from "react";
import todo_css from "../style/Todo.module.css";

export default function TodoItem(prop) {
  const [isChecked, setIsChecked] = useState(prop.checked);
  return (
    <div key={prop.key} className={todo_css.item}>
      <p className={todo_css.item_p}>
        {prop.inside}
    
  <span className={todo_css.rapper}>

        <input 
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            console.log(isChecked);
          }}
          id='checkbox'
          />
          </span>

      
        <button onClick={()=>{prop.onDel(prop.id)}}>-</button>
      </p>
      
    </div>
  );
}
