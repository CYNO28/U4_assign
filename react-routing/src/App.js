import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componenet/Home';
import   Products  from './Componenet/Products';
import Product from './Componenet/Product';
import Notfound from './Componenet/Notfound';
function App() {
  return (
    <div className="App">
         
         <div className='navbar'>
      <Link to="/">Home</Link>

      <Link to="/Products">Products</Link>
    </div>   
   <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/Products/*" element={<Products />} >
        <Route path=":id" element={<Product/>} />
      </Route>
      <Route path="*" element={<Notfound />} />
   </Routes>

    </div>
  );
}

export default App;
