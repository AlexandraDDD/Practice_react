import React from 'react'
import './card.css'

function Card({ product }) {
  return (
    <div className='product__card' >
      <img className='product__img' src={product.imageUrl} alt={product.title} />
      <h4 className='product__title' >{product.title}</h4>
      {product.discount === 1 ?
        <p>{product.price} ₽ </p> :
        <div className='product__discount' >
       
          <p className='product__Totalprice'>{product.price * product.discount} ₽ </p>
          <p className='product__Dprice'>{product.price} ₽ </p>
        </div>
      }
    </div>
  )
}

export default Card