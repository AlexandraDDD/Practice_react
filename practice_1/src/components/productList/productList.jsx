import React from 'react'
import { data as products } from '../../data/products'
import './productList.css'
import { ProductCard } from '../ProductCard'


function ProductList() {
    return (
        <div className='productList'>
            {products.map(product => (<ProductCard key={product.id} product={product}/>))}
        </div>
    )
}

export {ProductList}