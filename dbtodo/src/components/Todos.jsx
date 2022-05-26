import React, { useState } from "react";
import Todolist from "./Todolist";

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("")
  // let completedTodo = todos.filter((e)=>{ return e.isCompletd==true})
  const [completed, setCompleted] = useState([])
  // console.log(completed)   
  return <div>
<input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
<button onClick={()=>{setTodos([...todos,{text:value,isCompletd:false}])}}>Add</button>
<Todolist todo={todos} setCompleted={setCompleted} />
 </div>;
};

export default Todos;
