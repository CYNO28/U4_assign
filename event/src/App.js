// /import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
return(
  <div className="App">
    <input onChange={(e)=>setEnd(e.target.value)} placeholder="Enter End Value"/>
    <input onChange={(e)=>setStart(e.target.value)} placeholder='Enter Start value'/>
    <Timer start={start} setStart={setStart} end={end}/>
  </div>
)
}

export default App;
