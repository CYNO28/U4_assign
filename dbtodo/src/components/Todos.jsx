import React, { useState } from "react";
import Todolist from "./Todolist";
import TodoComp from './TodoComp'
import style from './todoComp.module.css'
const Todos = () => {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("")
  // let completedTodo = todos.filter((e)=>{ return e.isCompletd==true})
  const [completed, setCompleted] = useState([])
  // console.log(completed)   
  return <div className={style.mainbox}>
    <div>
<button onClick={()=>{setTodos([...todos,{text:value,isCompletd:false}])}}>+</button>
<input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
</div>
<Todolist todo={todos} setCompleted={setCompleted} />
<TodoComp completed={completed}/>
 </div>;
};

export default Todos;
