import React, { useState } from "react";
import Todolist from "./Todolist";

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("")
  const [completed, setCompleted] = useState([])

  return <div>
<input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
<button onClick={()=>{setTodos([...todos,{text:value,isCompletd:false}])}}>Add</button>
<Todolist todo={todos} />
 </div>;
};

export default Todos;
