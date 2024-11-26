import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import {Route, Routes} from 'react-router-dom'
import LoginComp from './Components/Login/LoginComp'
import Payment from './Pages/Payment/Payment'

const App =() => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginComp setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/payment' element={<Payment/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
