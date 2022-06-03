import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
     <Footer  />
    </div>
  );
}

export default App;
