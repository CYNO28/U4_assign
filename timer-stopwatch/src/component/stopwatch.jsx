import React, { useEffect } from 'react'
const Stopwatch = ({isStopwatch, setIsStopwatch}) => {
const[time, setTime] = React.useState(0)
const[isRunning, setIsRunning] = React.useState(false)
useEffect(() => {
    let interval
    if(isRunning) {
    interval = setInterval(() => {
        setTime(time => time + 1)
    }, 1000)
}else{
    clearInterval(interval)
}
    return () => clearInterval(interval)
}, [time, isRunning])

function start() {
    setIsRunning(true)
}
function stop() {
    setIsRunning(false)
}
function reset() {
    setTime(0)
    setIsRunning(false)
}
function format(time) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes < 10 ? '0' : ''}${minutes} M   :   ${seconds < 10 ? '0' : ''}${seconds} s`
}

  return (
    <div  className="App">
        
        <h1>{format(time)}</h1>
        {isRunning==false?<button onClick={start}>Start</button>:
        <button onClick={stop}>Stop</button>}
        <button onClick={reset}>Reset</button>



    </div>
  )
}

export default Stopwatch