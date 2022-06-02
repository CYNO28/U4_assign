import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Products from './component/Products';
import {Routes, Route} from 'react-router-dom';
import Product from './component/Product';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path='/'element={}/> */}
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
      
        <Route path='/products/*'element={<Products/>}>
        <Route path=':id'element={<Product/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
