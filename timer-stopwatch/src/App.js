import logo from './logo.svg';
import './App.css';
import Stopwatch from './component/stopwatch';
import Timer from './component/timer';
import Style from './style.module.css';
import React from 'react'
function App() {
  const [isStopwatch, setIsStopwatch] = React.useState(true);
  return (
    <div className={Style.box}>
        <div className={Style.header}>
        <p className={isStopwatch?Style.bottom:null} onClick={()=>setIsStopwatch(!isStopwatch)}>TIMER</p>
        <p className={!isStopwatch?Style.bottom:null} onClick={()=>setIsStopwatch(!isStopwatch)}>STOPWATCH</p>
        </div>
      <div >
      {isStopwatch?<Timer setIsStopwatch={setIsStopwatch} isStopwatch={isStopwatch} />
    :<Stopwatch setIsStopwatch={setIsStopwatch} isStopwatch={isStopwatch}/>
    }</div>
    </div>
  );
}

export default App;
