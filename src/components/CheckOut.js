import React from 'react';
import '../assets/checkout.css';
import {Link} from "react-router-dom";

const CheckOut = () => {
  return (
    <div className='chechout-container'>
        <div className='checkout'>
            <h2>You are checkout.</h2>
            <Link to="/">Do you want to buy more?</Link>
        </div>
    </div>
  )
}

export default CheckOut