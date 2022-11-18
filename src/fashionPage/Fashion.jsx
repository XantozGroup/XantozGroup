import React from 'react'
import './Fashion.css'
import Hatgirl from '../assets/girl-in-hat.png'

function Fashion() {
  return (
    <div className='fashion-body'>
        <h1 className='world'>World of Fashion</h1>
        <div className='fashion'>
            <div className='fashion-text'>
                <h1>Fashion</h1>
                <button className='text-but'>Shop now</button>
            </div>
            <div className='girl'>
                <img src={Hatgirl} alt="hatgirl" />
                <button className='girl-but'>Shop now</button>
            </div>
            <div className='fashion-text'>
                <h1>Collection</h1>
                <button className='shop'></button>
            </div>
        </div>
    </div>
  )
}

export default Fashion