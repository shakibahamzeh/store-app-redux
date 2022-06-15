import React from 'react';
import '../assets/blogCart.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

const BlogCart = ({data}) => {
    const {title,visitCount,description,image} = data;
  return (
    <div className='blog-cart-container'>
        <div className='pic-container'>
            <img src={image} alt="blog image"/>
        </div>
        <section>
             <div className='blog-cart-content'>
                 <h2>{title}</h2>
                 <p>{description}</p>
                 <p>{description}</p>
             </div>
             <div className='visit-container'>
                 <VisibilityIcon/>
                 <p>{visitCount}</p>
             </div>
        </section>
       
    </div>
  )
}

export default BlogCart