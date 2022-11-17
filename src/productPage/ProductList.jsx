import React from 'react'
import ProductCard from './ProductCard'

function ProductList({userss}) {
  return (
    <div>
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