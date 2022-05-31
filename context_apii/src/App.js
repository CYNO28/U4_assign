import logo from './logo.svg';
import './App.css';
const reducer=(state,action)=>{
  switch(action.type){
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;
    default:
      return state;
  }
}
function App() {
   const [counter, dispatch] = useReducer(first, second, third)(0);
  return (
    <div className="App">
     counter:{counter}
      <button onClick={()=>dispatch({type:'increment'})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
     </div>
  );
}

export default App;
