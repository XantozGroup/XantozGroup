import React from 'react'
import './Product.css'

function ProductCard({item, pic, cost}) {
  return (
    <div>
        <div className='card-bg'>
            <div className='card-cover'>
                <img src={pic} alt="pix" />
            </div>
            <p>
                {item}
            </p>
            <p>{cost}</p>
        </div>
    </div>
  )
}

export default ProductCard