import React from 'react';
import spinner from "../gif/spinner.gif";
import "../assets/loader.css"

const Loader = () => {
  return (
    <div className='loader'>
      <img src={spinner} alt="spinner"/>
    </div>
  )
}

export default Loader