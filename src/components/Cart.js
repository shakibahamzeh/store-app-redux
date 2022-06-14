import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {clear , checkout} from '../redux/cart/cartAction';
import CartProducts from './CartProducts';
import "../assets/cart.css";

const Cart = () => {
    
    const dispatch = useDispatch();
    const state = useSelector(state => state.cart)
  return (
    <div className='cart-container'>
        <div>
            <h2>Shopping Cart Products</h2>
             {state.selectedItems.map(item => <CartProducts key={item.id} data={item} />)}
        </div>
       <div className='order-container'>
           <div>
               <h2>Order Summary</h2>
           </div>
           <div className='total'>
               <div>Total Items:</div>
               <div className='total-number'>{state.itemsCounter}</div>
           </div>
           <div className='total'>
               <div>Total Price:</div>
               <div className='total-number'>{state.total} $</div>
           </div>
           <div className='btn-cart'>
               <button onClick={()=> dispatch(checkout())}>checkout</button>
               <button onClick={()=> dispatch(clear())}>Clear</button>
           </div>
       </div>
    </div>
  )
}

export default Cart