import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
import Todolist from './component/Todolist';
import style from './component/style.module.css';
import { ThemeContext } from './ContextApi/ThemeContext';
import { useContext } from 'react';
function App() {
const {mode}=useContext(ThemeContext);
  return (
    <div className={!mode?style.dark:style.light} style={{ height:"100vh",width:'100%',overflow:"hidden"}} >
      <Todo/>
      <Todolist/>
     
    </div>
  );
}

export default App;
