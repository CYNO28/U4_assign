import React, { useEffect } from 'react'
import {useState} from 'react'
const Timer = () => {
  const[timer,settimer]=useState(0);
  
  
  useEffect(()=>{
      let id = setInterval(()=>{
          if(timer > 9){
              console.log("this should work")
                clearInterval(id)
            }
          settimer((prev)=>(prev+1));
      },1000)


      return ()=>{
          clearInterval(id);
      }
  },[])
    return (
    <div>Timer:{timer}</div>
  )
}

export default Timer