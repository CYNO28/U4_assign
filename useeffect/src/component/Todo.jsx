import React, { useEffect, useState } from "react";
import axios from "axios";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  console.log(page);

  useEffect(() => {
    fetch(`http://localhost:8080/posts?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  },[page]);
  let postreq = () => {
    axios
      .post("http://localhost:8080/posts", {
        text: input,
        isComplete: false,
      })
      .then((resp) => {
        setTodos([...todos, resp.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={postreq}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
            <button onClick={() => {
                if(page != 1) {
                 setPage(page - 1)
            }
            }
                }>Prev</button>
      <button
        onClick={() => {
            if(todos.length==5){
                console.log(todos.length,"lengthh")
                setPage(page + 1)
            }
        }
        }
      >
        Next
      </button>
    </div>
  );
};

export default Todo;
