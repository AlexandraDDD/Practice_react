import React from 'react'
import './card.css'

function ProductCard({ imageUrl, title, price, discount }) {
  return (
    <div className='product__card' >
      <img className='product__img' src={imageUrl} alt={title} />
      <h4 className='product__title' >{title}</h4>
      <h2 className={`product__price ${discount && 'product__price_active'}`}>
        {discount ? `${price * discount} ₽` : `${price} ₽`}
        <span className='product__discount'>{price} ₽</span>
      </h2>
      {/*  {product.discount === 1 ?
        <p>{product.price} ₽ </p> :
        <div className='product__discount' >
          <p className='product__Totalprice'>{price * discount} ₽ </p>
          <p className='product__Dprice'>{price} ₽ </p>
        </div>
      } */}
    </div>
  )
}

export { ProductCard }