import React, { useContext, useState } from 'react'
import './Navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import cart from '../../assets/cart.png'
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({setShowLogin}) => {

    const[menu,setMenu]=useState("home");

    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <section className='navbarsection'>
        <header className="header flex">
            <div className='headerlogo'>
                <Link to='/'><a href="#" className='hlogo flex'>Tomato.</a></Link>
            </div>

            <div className="navbar">
                <ul className="navbar-menu">
                  <Link to='/' onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>home</Link>
                  <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>menu</a>
                  <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>mobile app</a>
                  <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}>contact us</a>
                </ul>
            </div>

            <div className="navbar-right flex">
            <IoSearchOutline className='icon'/>
             <div className="navbar-search-icon">
             <Link to='/cart'><img src={cart} alt="" className='image' /></Link>
             <div className={getTotalCartAmount()===0?"":"dot"}></div>
             </div>
             <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </header>
        
    </section>
  )
}

export default Navbar