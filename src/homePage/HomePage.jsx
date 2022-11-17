import React from 'react'
import './HomePage.css'
import lady from '../assets/lady_img.png'

function HomePage() {
  return (
    <div className='home'>
      <div className='home-body'>
        <div className='home-bg'>
          <div className='home-text'>
            <h1>XANTOZ FASHION CLINIC</h1>
            <span className='trend'>Trend 2050</span>
            <p className='text'>
              <span>Oh Yass!</span><br /> We make irresistible outfits that suit YOU.
            </p>
            <p className='collect'>Classic fashion collections 4everrr.</p>
            <button>Trend here &#128525;</button>
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