import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const View = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/addprofile/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setProduct(data);
        };
        useEffect(() => {
            fetchProduct();
        }, []);
    }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <h3>{product.email}</h3>
      <h3>{product.companyname}</h3>
      <h3>{product.contactnumber}</h3>
      <h5>{product.description}</h5>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default View