import React from 'react'
import { Link } from 'react-router-dom';
import "../assets/notFound.css"

const NotFound = () => {
  return (
    <div className='not-found-container'>
        <h1>404 PAGE NOT FOUND.</h1>
        <p>Sorry,we can't found that page.You'll find loads to explore on the home page.</p>
        <Link to="/">Home Page</Link>
    </div>
  )
}

export default NotFound