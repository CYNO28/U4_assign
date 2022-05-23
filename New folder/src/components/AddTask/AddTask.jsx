import React from "react";
import styles from "./addTask.module.css";

const AddTask = (prop) => {
  const [value ,setValue]=React.useState('')
  // const [count,setCount]=React.useState(0)
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" placeholder="Add task..." type="text" value={value}
      onChange={(e)=>
      setValue(e.target.value)
      } />
      <button data-cy="add-task-button" onClick={()=>{
        let flag=true
 prop.todo.map(e=>{if(e.text==value )flag=false })
if(value!==''&&flag){
  

   prop.setTodo([...prop.todo,{id:prop.todo.length+1,text:value,done:false,count:0}])
       setValue('')
       flag=true
      }}}>+</button>
    </div>
  );
};

export default AddTask;
