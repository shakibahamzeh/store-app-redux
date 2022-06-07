import React,{useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from '../redux/products/productAction';
import Product from "./Product";




 const Products = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products);
    console.log(productsData.products)

    useEffect(()=>{
        if(!productsData.products.length) dispatch(fetchProducts())
    },[]);

  return (
    <div>
        {
          productsData.loading ? 
          <h2>loading ...</h2>
          :
          productsData.error ?
          <p>{productsData.errorMsg}</p>
          :
          productsData.products.map(product => <Product key={product.id} productData={product}/> )
        }
    </div>
  )
}

export default Products;