import React, { useContext } from 'react'
import { TodoContext } from '../ContextApi/TodoContext'
import style from './style.module.css'
const Todolist = () => {
    const{todos,dispatch}=useContext(TodoContext)
  return (
    <div className={style.todolist}>{
        todos.map((e)=>(<div key={e.id} className={style.indtodo}>{e.value}
        <button 
        onClick={()=>{
            dispatch({type:'DELETE_TODO',payload:e})
        }}
        >Delete</button>
        </div>))
        }</div>
  )
}

export default Todolist