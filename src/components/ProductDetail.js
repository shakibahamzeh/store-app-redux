import React from 'react';
import {useSelector} from "react-redux";
import { useParams } from 'react-router-dom';


const ProductDetail = (props) => {
    const id = useParams().id;
    console.log(id)
    const data = useSelector(state => state.products.products);
    const product = data[id];
    const {category,title,price,description} = product;
    
  return (
    <div>
        <h2>{title}</h2>
        <div>
             <img src={`${category.image}`} alt="product"/>
        </div>
        <div>
            <p>{description}</p>
        </div>
        <div>
            <p>{price} $</p>
        </div>
    </div>
  )
}

export default ProductDetail