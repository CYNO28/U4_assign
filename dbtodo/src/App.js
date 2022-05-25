import './App.css';
import Todo from './components/Todos';
import axios from 'axios';
import { useEffect } from 'react';
import Timer from './components/Timer';
function App() {
  // useEffect(() => {
  //   const getTodo=async ()=>{
  //     // console.log(axios)
  //     let r= await axios.get("http://localhost:8080/posts");
  //     console.log(r.data);


  //   }
  //   getTodo();
  // },[])
  return (
    <div className="App">
          
<Timer/>
    </div>
  );
}

export default App;
