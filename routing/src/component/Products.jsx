import React, { useState } from 'react'
import {useEffect} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Product from './Product'
const Products = () => {
const [products, setProducts] = useState([])
const nav=useNavigate()

  useEffect  (()=>{
    const fetchPorducts = async () => {
      const res = await fetch('http://localhost:8080/products')
      const data = await res.json()
      setProducts(data)
      console.log(products)
  }
fetchPorducts()
nav('/products/1')

}
  ,[]
  )
  return (
    <div>
      
      {products.map(product => 
      <Link key={product.id} to={`/products/${product.id}`}>{product.Name}</Link>
      )}
      <Outlet></Outlet>
    </div>
  )
}

export default Products