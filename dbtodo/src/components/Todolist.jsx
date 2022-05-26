import React from "react";
import style from './todoComp.module.css'
const Todolist = (prop) => {
  return (
    <div >
      {prop.todo.map((e,index) => (
        <div key={index} className={style.item} class>
          <input type="checkbox" placeholder="Add A to-do" onChange={()=>{
            e.isCompletd =(!e.isCompletd)
            // console.log(prop.todo)
            prop.setCompleted(prop.todo.filter((e)=>{ return e.isCompletd==true}))
            }}/>
          {e.text}
          
        </div>
      ))}
    </div>
  );
};

export default Todolist;
