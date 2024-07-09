import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductList from './components/productList/productList'
import './App.css'

function App() {
  return (
    <>
    <h2>Список товаров</h2>
      <ProductList/>
    </>
  )
}

export default App
