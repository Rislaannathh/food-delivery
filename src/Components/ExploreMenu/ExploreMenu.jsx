import React, { useEffect } from 'react'
import './ExploreMenu.css'
import menu_1 from '../ExploreMenu/menu_1.jpg'
import menu_2 from '../ExploreMenu/menu_2.jpg'
import menu_3 from '../ExploreMenu/menu_3.jpg'
import menu_4 from '../ExploreMenu/menu_4.jpg'
import menu_5 from '../ExploreMenu/menu_5.jpg'
import menu_6 from '../ExploreMenu/menu_6.jpg'
import menu_7 from '../ExploreMenu/menu_7.jpg'
import menu_8 from '../ExploreMenu/menu_8.jpg'
import menu_9 from '../ExploreMenu/menu_9.jpg'
import menu_10 from '../ExploreMenu/menu_10.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ExploreMenu = ({}) => {
    useEffect(()=>{
        Aos.init({duration: 2000})
      },[])
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1 data-aos="fade-out">Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy coustomer with delicious food .</p>
        <div className="explore-menu-list">
        <div  className="explore-menu-list-item" data-aos="fade-up">
            <div>
                <img src={menu_1} alt="" />
                <h6 >Salad</h6>
            </div>
            <div>
                <img src={menu_2} alt="" />
                <h6>Rolls</h6>
            </div>
            <div>
                <img src={menu_3} alt="" />
                <h6>Desert</h6>
            </div>
            <div>
                <img src={menu_4} alt="" />
                <h6>Sandwich</h6>
            </div>
            <div>
                <img src={menu_5} alt="" />
                <h6>Cake</h6>
            </div>
            <div>
                <img src={menu_6} alt="" />
                <h6>Pure Veg</h6>
            </div>
            <div>
                <img src={menu_7} alt="" />
                <h6>Pasta</h6>
            </div>
            <div>
                <img src={menu_8} alt="" />
                <h6>Noodles</h6>
            </div>
            <div>
                <img src={menu_9} alt="" />
                <h6>Burger</h6>
            </div>
            <div>
                <img src={menu_10} alt="" />
                <h6>Pizza</h6>
            </div>
        </div>
          
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu