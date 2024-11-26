import React, { useEffect } from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
   // scroll animation
   useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='footer' id='footer' >
        <div className="footer-content" data-aos="fade-up">
            <div className="footer-content-left"   >
                <a href="#" className='hlogo flex'>Tomato.</a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis excepturi quis debitis consectetur optio harum, nihil veritatis, quaerat deleniti molestiae quidem iure ipsum cupiditate perspiciatis quas minus velit illo.</p>
                <div className="footer-social-icons">
                <div><FaFacebookF className='icon1' /></div>
                <div><FaTwitter className='icon2'/></div>
                <div><LuInstagram className='icon3'/></div>
                <div><FaLinkedinIn className='icon4'/></div>
                <div ><FaWhatsapp className="icon5"/>                </div>

                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-333-445-3343</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />

        <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )

}

export default Footer