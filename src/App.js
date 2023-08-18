import React from "react";
import Navbar from "./components/Navbar";
import {Routes , Route} from 'react-router-dom';
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ScrollToTopButton from "./buttons/ScrollToTopButton ";
function App() {
  return (
    <div className="overflow-x-hidden" >
    <Navbar />
      <Routes>
        <Route exact  path="/" element={<Home/>}/>
        <Route  path="/products" element={<Products/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/products/:id" element={ <Product/> }/>
        <Route  path="/cart" element={ <Cart/> }/>
        <Route  path="/checkout" element={ <Checkout/> }/>


      </Routes>
      <ScrollToTopButton />
    </div>
     
      
  );
}

export default App;
