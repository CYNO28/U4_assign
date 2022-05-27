// /import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [stime, setStime] = useState(0);
  const [etime, setEtime] = useState(0);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter stating time"
        onChange={(e) => {
          setStime(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter end time"
        onChange={(e) => {
          setEtime(e.target.value);
          console.log(etime)
        }}
      />
      <Timer stime={stime} etime={etime} />
    </div>
  );
}

export default App;
