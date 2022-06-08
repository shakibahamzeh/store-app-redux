import React from 'react';
import {useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
import "../assets/productDetails.css";


const ProductDetail = (props) => {
    const id = useParams().id;
    const data = useSelector(state => state.products.products);
    const product = data[id];
    const {title,price,description,images} = product;
    console.log(images)
    const dataImages =[
      {images: `${images[0]}`},
      {images: `${images[1]}`},
      {images:`${images[2]}`},
    ]
    console.log(dataImages)
  return (
    <div className='details-container'>
        
        <div className='img-container'>
          
            
          <img src={images} alt="product"/>
          </div>
          <div>
            <h2>{title}</h2>
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