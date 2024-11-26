import React, { useContext, useEffect } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import { food_list } from '../../assets/asset'
import FoodItem from '../FoodItem/FoodItem'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FoodDisplay = ({category}) => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
   const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display' data-aos="fade-in">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
           {food_list.map((item,index)=>{
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
           })}
        </div>
    </div>
  )
}

export default FoodDisplay