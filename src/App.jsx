import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCateogary from "./pages/ShopCateogary";
import Shop from './pages/Shop';
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import LoginSignup from './pages/LoginSignup'
import Checkout from "./pages/Checkout";
import mens_banner from './Components/Assets/banner_mens.png'
import womens_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes> 
      <Route path="/" element={<Shop/>}/>
      <Route path="/mens" element={<ShopCateogary category="men" banner={mens_banner} />}/>
      <Route path="/womens" element={<ShopCateogary category="women" banner={womens_banner} />}/> 
      <Route path="/kids" element={<ShopCateogary category="kid" banner={kids_banner} />}/> 
      <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
     </Routes> 
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
