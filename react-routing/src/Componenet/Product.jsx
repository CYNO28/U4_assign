import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {
    const [product, setproduct] = useState([])
    const [Aproduct, setAproduct] = useState([])
    const {id} =useParams()

useEffect (() => {
  const fetchProduct = async () => {
  let r=await fetch(`http://localhost:8080/products/${id}`)
  let data=await r.json()
  
  setproduct(data)
}
fetch(`http://localhost:8080/products`).then(res=>res.json()).then(data=>setAproduct(data))
if(id)fetchProduct()
 
}, [id])
// console.log(id)
 return (
    <div className='outlet'>
        {id<Aproduct.length?`${product.name} | ${product.price}$` :"Product does not exist"}

    </div>
  )
}

export default Product