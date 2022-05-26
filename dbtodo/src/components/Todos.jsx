import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Todos = () => {
    const[newTodo,setnewTodos]=useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);
  function putdata() {
  fetch("http://localhost:8080/posts",
    {method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        text: newTodo,
        isCompleted: false
    }
        )}).then(res => res.json())
        .then(data => {
            setTodos([...todos, data]);
            console.log(data);
            setnewTodos("");
            })
  
    }
  return <div>
      <div>
        <input type="text" onChange={(e)=>{setnewTodos(e.target.value)}} />
        <button onClick={putdata}>+add</button>
          {todos.map((todo) => <div key={todo.id}>{todo.text}</div>)}
      </div>
      </div>;
};

export default Todos;
