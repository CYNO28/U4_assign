import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {
const [product, setproduct] = useState([])
const {id} =useParams()
useEffect (() => {
  const fetchProduct = async () => {
  let r=await fetch(`http://localhost:8080/products/${id}`)
  let data=await r.json()
  
  setproduct(data)
}
if(id)fetchProduct()
 
}, [id])
 return (
    <div> Product :{id}
      Name :{product.Name}
    </div>
  )
}

export default Product