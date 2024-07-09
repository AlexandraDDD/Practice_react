import React from 'react'
import { data as products } from '../../data/products'
import Card from '../card/card'
import './productList.css'

function ProductList() {
    return (
        <div className='productList'>
            {products.map(product => (<Card key={product.id} product={product}>    </Card>))}
        </div>
    )
}

export default ProductList