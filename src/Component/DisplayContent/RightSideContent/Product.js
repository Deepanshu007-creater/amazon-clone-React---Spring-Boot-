import React from 'react'
import './Product.css';

export default function Product(props) {
  return (
    <div className='product'>
      <div className='product_image'>
        <img src={props.image} height='280px' />
      </div>
      <div className='product_name'>
        {/* New Apple iPhone 11, Blue Colour 256 GB */}
        {props.name}
      </div>
      <div className='product_rating'>
        {props.rating}
      </div>
      <div className='product_price'>
        {props.price}
      </div>
    </div>
  )
}
