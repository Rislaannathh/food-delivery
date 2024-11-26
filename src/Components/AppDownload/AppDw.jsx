import React from 'react'
import './AppDw.css'
import play from '../AppDownload/playstore.jpg'
import app from '../AppDownload/appstore.jpg'
const AppDw = () => {
  return (
    <div className='AppDownload' id='app-download'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className="app-download-platforms">
        <img src={play} alt="" className='img1'/>
        <img src={app} alt="" className='img2' />
      </div>
    </div>
  )
}

export default AppDw