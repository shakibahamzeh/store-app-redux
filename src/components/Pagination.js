import React from 'react';
import '../assets/pagination.css'


const Pagination = ({productsPerPage,totalProducts,paginate}) => {
    const pageNumbers = [];
    for(let i=1 ; i <= Math.ceil(totalProducts / productsPerPage); i++){
         pageNumbers.push(i)
    }
  return (
    <nav className='pagination'>
        <ul>
            {
                pageNumbers.map( page => <li key={page}><a onClick={() => paginate(page)} href='#'>{page}</a></li>)
            }
        </ul>
    </nav>
  )
}

export default Pagination