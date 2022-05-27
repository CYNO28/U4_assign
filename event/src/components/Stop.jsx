import React,{useRef, useState} from 'react'
const Stop = () => {

    const timerID=useRef(null);
    const [watch,setWatch]=useState(0);
    const start=()=>{
        if(!timerID.current){
        let id = setInterval(()=>{
            setWatch((timer)=>timer+1);
        },1)
        timerID.current=(id);

    }}
    const pause=()=>{
        clearInterval(timerID.current);
        timerID.current=null;
    }
    const reset=()=>{
        clearInterval(timerID.current);
        setWatch(0);
        timerID.current=null;
    }
  return (
    <div>
        hello
        {watch}
        <button onClick={start}>start</button> 
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Stop;