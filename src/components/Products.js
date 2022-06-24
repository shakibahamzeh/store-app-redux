import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from '../redux/products/productAction';
import Loader from './Loader';
import Product from "./Product";

import "../assets/products.css"
import Slider from './Slider';
import Pagination from './Pagination';


 const Products = ({search}) => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products);
    //pagation

    const [currentPage,setCurrentPage] = useState(1);
    const [productsPerPage] = useState(24);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsData.products.slice(indexOfFirstProduct, indexOfLastProduct) ||  productsData.products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
    //function
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    


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
          currentProducts.map(product => <Product key={product.id} productData={product} />)
          
        }
        
        </div>
       <Pagination totalProducts={productsData.products.length} productsPerPage={productsPerPage} paginate={paginate}/>
    </div>
  )
}

export default Products;