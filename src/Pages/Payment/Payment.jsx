import React, { useState } from 'react'
import './Payment.css'
import logo from '../Payment/logo.jpeg'
import { HiCreditCard } from "react-icons/hi2";

const Payment = () => {
    const [payment,setPayment]= useState()

  return (
    <div className='container'>
        <div className="payment flex">
            
          <div className="cards">
          <p className='title'>Payment Information</p>
          <img src={logo} alt="" />
          </div>
          <form action="">
          <div className="place-order-left">
        <input type="text" placeholder='card number '/>
       
        <div className="multi-fields">
          <input type="text" placeholder='Expiry date'  />
          
          <input type="text" placeholder='CVV' />
        </div>
        
        <input type="text" placeholder='Phone'/>
      </div>
      <button onClick={()=>setPayment(alert('Payment Successfully Completed'))}>PAY NOW</button>
          </form>
        </div>
    </div>
  )
}

export default Payment