import React, { useContext } from 'react'
import './FoodItem.css'
import rate from '../FoodItem/rate.png'
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { StoreContext } from '../../Context/StoreContext';


const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='food-item' data-aos="fade-up">
        <div className='food-item-image-container' >
            <img  src={image} alt="" />
            {
                !cartItems[id]
                  ?<FiPlusCircle className='add' onClick={()=>addToCart(id)} />
                  :<div className='food-item-counter'>
                    <FiMinusCircle className='icon' onClick={()=>removeFromCart(id)}/>
                    <p>{cartItems[id]}</p>
                    <FiPlusCircle className='icon' onClick={()=>addToCart(id)}/>
                  </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={rate} alt="" />

            </div>

            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem