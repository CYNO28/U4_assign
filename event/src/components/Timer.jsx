import React, { useEffect, useRef } from 'react'

const Timer = ({start ,setStart,end}) => {
const[startTime,setStartTime] = React.useState(false)
useEffect(() => {
    console.log("unmount")
 let interval  =null

 if(startTime)starts()
  function starts(){
// console.log(startTime)
    interval= setTimeout(() => {
      setStart((count) => (Number(count) + 1));
    }, 1000);
  }
  if(start>=Number(end)){
clearInterval(interval)
  }
  
    return () => {
      clearTimeout(interval);
    }
   
  },[start,startTime]);
   
 

  
  return (
    <div className="App">Timer:{start}
    <br></br>
      <button onClick={()=>setStartTime(!startTime)} >Start</button>
    </div>
  )
}

export default Timer