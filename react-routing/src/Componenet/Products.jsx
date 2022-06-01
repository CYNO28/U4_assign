import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
 const Products = () => {


    const [Product, setProduct] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return <div className="navbar products">{Product.map((e)=>(
      <Link key={e.id} to={`/Products/${e.id}`}>{ e.name }</Link>
  ))}
  <Outlet ></Outlet>
 
  </div>;
};

export default Products;