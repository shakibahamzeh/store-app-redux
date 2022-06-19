import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {clear , checkout} from '../redux/cart/cartAction';
import CartProducts from './CartProducts';
import { Link } from 'react-router-dom';
import "../assets/cart.css";

const Cart = () => {
    
    const dispatch = useDispatch();
    const state = useSelector(state => state.cart)
  return (
    <div className='cart-container'>
        <div className='shopping-cart-container'>
            <h2>Shopping Cart Products</h2>
            <div>
                {state.selectedItems.map(item => <CartProducts key={item.id} data={item} />)}
            </div>
             
        </div>
       <div className='order-container'>
           <div>
               <h2>Order Summary</h2>
           </div>
           <div className='total'>
               <span>Total Items:</span>
               <div className='total-number'>{state.itemsCounter}</div>
           </div>
           <div className='total'>
               <span>Total Price:</span>
               <div className='total-number'>{state.total} $</div>
           </div>
           <div className='btn-cart'>
               <button onClick={()=> dispatch(checkout())}>Checkout</button>
               <button onClick={()=> dispatch(clear())}>Clear</button>
           </div>
        <div className='checkout'>
         {
           state.checkOut && 
             <div>
             <h3>Checked Out Successfully</h3>
             <Link to="/products">Buy More</Link>
            </div>
         }
         </div>
         <div>
          {
           !state.checkOut && state.itemsCounter === 0 &&
            <div className='clear-link'>
             <h3>Want to Buy?</h3>
             <Link to="/products">Go To Shop</Link>
           </div>
         }
         </div>
       </div>
    </div>
  )
}

export default Cart