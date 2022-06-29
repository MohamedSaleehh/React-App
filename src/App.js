import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home/Home'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Counter from './Pages/counter';
import Shop from './Pages/shop/Shop';
import Product from './Pages/shop/Product';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>      
      <Route path='/' element={<Home/>} />
      <Route path='/counter' element={<Counter/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/product/:id' element={<Product/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
