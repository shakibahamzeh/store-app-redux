import React,{useState,useEffect} from 'react';
import BlogCart from './BlogCart';
import Pagination from './Pagination';
import '../assets/blogs.css';


const Blog = () => {
  
  const blogData = [
    {id:0,image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",title:"Fashion Shoe",description:"Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.",visitCount:10},
    {id:1,image:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",title:"Smart Watch",description:"Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.",visitCount:11},
    {id:2,image:"https://images.unsplash.com/photo-1573659532403-260959eed48f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",title:"Bar Stool",description:"Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.",visitCount:2},
    {id:3,image:"https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",title:"Jeans",description:"Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.",visitCount:10},
    {id:4,image:"https://images.unsplash.com/photo-1630080644615-0b157f1574ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",title:"AirPads",description:"Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.",visitCount:20},
    {id:5,image:"https://images.unsplash.com/photo-1631041556964-57f2686f1113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",title:"Warm Tones",description:"Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.",visitCount:10},
    {id:6,image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",title:"Fashion Women Shoe",description:"Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.",visitCount:30},
    {id:7,image:"https://images.unsplash.com/photo-1600009710631-5baaaaf50754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",title:"Computer Hardware",description:"Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.",visitCount:100},
    {id:8,image:"https://images.unsplash.com/photo-1579171931975-97962e46be2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",title:"Fashion Watch",description:"Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.",visitCount:5}
  ];

    const [currentPage,setCurrentPage] = useState(1);
    const [productsPerPage] = useState(4);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = blogData.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


   
  return (
    <div className='blogs-container'>
     {
       currentProducts.map(item => <BlogCart key={item.id} data={item}/>)
     }
      
     <Pagination totalProducts={blogData.length} productsPerPage={productsPerPage} paginate={paginate}/> 
     
    </div>
  )
}

export default Blog