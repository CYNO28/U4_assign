import React, { useEffect } from 'react'
import {useState} from 'react'
const Timer = () => {
  const[timer,settimer]=useState(0);
  
  
  useEffect(()=>{
      let id = setInterval(()=>{
        
        settimer((timer)=>timer+1);
      },1000)
      if(timer >= 9){
        console.log("this should work")
        clearInterval(id)
      }

      return ()=>{
          clearInterval(id);
      }
  },[timer])
    return (
    <div>Timer:{timer}</div>
  )
}

export default Timer