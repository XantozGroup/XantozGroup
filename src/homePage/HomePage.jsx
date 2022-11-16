import React from 'react'
import './HomePage.css'
import lady from '../assets/lady_img.png'

function HomePage() {
  return (
    <div>
      <div className='home-body'>
        <div className='home-bg'>
          <div className='home-text'>
            <h1>XANTOZ GROUP</h1>
            <span className='trend'>Trend 2050</span>
            <p className='text'><span>Oh Yass!</span><br /> We make outfits that suit <span>YOU.</span></p>
          </div>
          <div className='home-pix'>
            <img src={lady} alt="lady" />
          </div>   
        </div>
      </div>
        
    </div>
  )
}

export default HomePage