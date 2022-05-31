import React, { useEffect, useRef } from 'react'

const Timer = ({isStopwatch, setIsStopwatch}) => {
    const[start,setStart] = React.useState(300)
const[startTime,setStartTime] = React.useState(false)
useEffect(() => {
    console.log("unmount")
 let interval  =null

 if(startTime)starts()
  function starts(){
// console.log(startTime)
    interval= setTimeout(() => {
      setStart((count) => (Number(count) - 1));
    }, 1000);
  }
  if(start<=0){
clearInterval(interval)
  }
  
    return () => {
      clearTimeout(interval);
    }
   
  },[start,startTime]);
 function reset(){
        setStart(300)
        setStartTime(false)
 }  
 function format(time) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes < 10 ? '0' : ''}${minutes} M   :   ${seconds < 10 ? '0' : ''}${seconds} s`
}


  
  return (
    <div className="App">
        <h1>
            {format(start)}
            </h1>
    <br></br>
     { startTime==false?<button onClick={()=>setStartTime(!startTime)} >Start</button>
      :<button onClick={()=>setStartTime(!startTime)} >Pause</button>
     } <button onClick={reset} >Reset</button>
    </div>
  )
}

export default Timer