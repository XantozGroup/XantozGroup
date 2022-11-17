import React from 'react'
import ProductCard from './ProductCard'
import './Product.css'

function ProductList({userss}) {
  return (
    <div className='pro-list'>
        {userss.map((userz) =>(
            <ProductCard
            key={userz.id.toString()}
            item={userz.item}
            cost={userz.cost}
            pic={userz.pic}
            />
        ))}
    </div>
  )
}

export default ProductList