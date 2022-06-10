import React, { useContext } from 'react'
import { TodoContext } from '../ContextApi/TodoContext'

const Todolist = () => {
    const{todos,dispatch}=useContext(TodoContext)
  return (
    <div>{
        todos.map((e)=>(<div key={e.id}>{e.value}
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