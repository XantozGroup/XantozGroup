import React from 'react'
import './Fashion.css'
import Hatgirl from '../assets/girl-in-hat.png'

function Fashion() {
  return (
    <div>
        <div>
            <div className='fashion-text'>
                <h1>Fashion</h1>
                <button>Shop now</button>
            </div>
            <div>
                <img src={Hatgirl} alt="" />
            </div>
            <div className='fashion-text'>
                <h1>Collection</h1>
            </div>
        </div>
    </div>
  )
}

export default Fashion