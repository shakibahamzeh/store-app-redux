import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({productData}) => {
  return (
    <div>
        <h2>{productData.title}</h2>
        <Link to={`/products/${productData.id}`}>
          detail
        </Link>
    </div>
  )
}

export default Product