import React from 'react'

function ProductCard({item, pic, cost}) {
  return (
    <div>
        <div className='card-bg'>
            <div className='card-cover'>
                <img src={pic} alt="pix" />
            </div>
        </div>
    </div>
  )
}

export default ProductCard