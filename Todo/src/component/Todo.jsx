import React, { useState } from "react";
import TodoList from "./TodoList.jsx";
import todo_css from "../style/Todo.module.css";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function onDel(id){
    setTodos(todos.filter(el=>el.id!==id));
  }
  console.log(todo_css)
 
  return (
    <div className={todo_css.body}>
      <h1 className={todo_css.main}>Todo App</h1>
      <TodoList todo={[...todos]}
      onDel={onDel}
      />
      <input onChange={(e) => {
          setTodo(e.target.value);
        }
      }
      value={todo}
      />
      <button
        onClick={() => {
          setTodos([...todos, {id:Date.now(), todo:todo,checked:false}]);
          console.log(todos);
          setTodo("");
        }}
      >
        +
      </button>
    
    </div>
  );
}
