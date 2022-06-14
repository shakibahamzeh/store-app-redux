import React,{useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from '../redux/products/productAction';
import Loader from './Loader';
import Product from "./Product";

import "../assets/products.css"
import Slider from './Slider';


 const Products = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products);
    useEffect(()=>{
        if(!productsData.products.length) dispatch(fetchProducts())
    },[]);
  return (
    <div className="container">
       <div className='slider-container'>
         <Slider/>
       </div>

        <div>
          <h1>Products</h1>
        </div>
        <div className='products' >
         {
          productsData.loading ? 
          <Loader/>
          :
          productsData.error ?
          <p>{productsData.errorMsg}</p>
          :
          productsData.products.map(product => <Product key={product.id} productData={product}/>)
          
        }
        </div>
       
    </div>
  )
}

export default Products;