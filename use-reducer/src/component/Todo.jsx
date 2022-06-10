import React, { useContext, useRef } from "react";
import { ThemeContext } from "../ContextApi/ThemeContext";
import { TodoContext } from "../ContextApi/TodoContext";
import style from "./style.module.css"
const Todo = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const {mode, dispatch1 } = useContext(ThemeContext);
  const ref = useRef();

  return (
    <div className={style.todocontainer}  >
      <h1 className={style.heading}>
        My Dashboard
        
        <button onClick={()=>{dispatch1({type:'CHANGE'})}}>{mode?"DARK":"LIGHT"}</button>
       
      </h1>
      <div className={style.todoinput}>
      <input type="text" ref={ref} />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            payload: {
              value: ref.current.value,
              iscomplete: false,
              id: Math.random(),
            },
          });
          console.log(todos);
        }}
      >
        ADD
      </button>
      </div>
    </div>
  );
};

export default Todo;
