import React from "react";

const Todolist = (prop) => {
  return (
    <div>
      {prop.todo.map((e,index) => (
        <div key={index}>
          <input type="checkbox" onChange={
              e.isCompleted=!e.isCompleted
              }/>
          {e.text}
          
        </div>
      ))}
    </div>
  );
};

export default Todolist;
