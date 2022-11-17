import React from 'react'
import './Product.css'
import ProductList from './ProductList'
import users from './users.json'

function Product() {
  return (
    <div className='pro-body'>
        <div className='product'>
        <h1>Our Products</h1>
        <div className='pro-user'>
        <ProductList userss={users}/>
        </div>
    </div>
    </div>
    
  )
}

export default Product