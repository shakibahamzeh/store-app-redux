import React,{useEffect,useMemo,useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from '../redux/products/productAction';
import Loader from './Loader';
import Product from "./Product";

import "../assets/products.css"
import Slider from './Slider';
import Pagination from './Pagination';
import { selectTerm } from "../redux/search/selectors";


 const Products = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products);
    //pagation

    const [currentPage,setCurrentPage] = useState(1);
    const [productsPerPage] = useState(24);
    const term = useSelector(selectTerm);

    
    //function
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

    const [productsFiltered, filteredLength] = useMemo(() => {
		let { products } = productsData;
		let _filtered = !!term
			? products.filter((product) =>
					product.title.toLowerCase().includes(term.toLowerCase())
			  )
			: products;

		const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
		const indexOfLastProduct = indexOfFirstProduct + productsPerPage;
		const sliced = _filtered.slice(indexOfFirstProduct, indexOfLastProduct);


    return [sliced, _filtered.length]
	}, [currentPage, productsData, productsPerPage, term]);

	useEffect(() => {
		if (!productsData.products.length) dispatch(fetchProducts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
    

     
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
          productsFiltered.map(product => <Product key={product.id} productData={product} />)
          
        }
        
        </div>
       <Pagination totalProducts={filteredLength} productsPerPage={productsPerPage} paginate={paginate}/>
    </div>
  )
}

export default Products;