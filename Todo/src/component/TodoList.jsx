import React from 'react'


import TodoItem from './TodoItem.jsx'
export default function TodoList(prop) {
// const [todos, setTodos] = React.useState([prop.todo])
// function onDel(id){
//   setTodos(todos.filter(el=>el.id!==id));
// }
  return (
    <div>{prop.todo.map((el,index)=>{
        return (<TodoItem key={el.id} inside={el.todo} checked={el.checked} id={el.id} onDel={prop.onDel}/>)
    })}</div>
  )
}
