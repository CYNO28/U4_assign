import React, { useEffect,useRef } from 'react'
import {useState} from 'react'
const Timer = (prop) => {
  const[timer,settimer]=useState(0);
  const timerID=useRef(null);
  
  
  // useEffect(()=>{
     function start(){ 
      let id = setInterval(()=>{
        settimer((timer)=>timer+1);
        console.log( timerID.current,'id')
    },1000)
    timerID.current=(id);
    if(timer >= 20){
        // console.log(prop.etime)
        console.log("this should work")
        clearInterval(timerID.current);
      }}

      // return ()=>{
      //     clearInterval(id);
      // }
  // },[timer])
    return (
    <div>Timer:{timer}
    <button onClick={start}>Start</button>
    </div>
  )
}

export default Timer