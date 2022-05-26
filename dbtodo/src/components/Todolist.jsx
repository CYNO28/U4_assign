import React from "react";

const Todolist = (prop) => {
  return (
    <div>
      {prop.todo.map((e,index) => (
        <div key={index}>
          <input type="checkbox" onChange={()=>{
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
