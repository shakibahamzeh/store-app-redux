import React from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem, decreaseItem, increaseItem } from "../redux/cart/cartAction";
import '../assets/cartProducts.css';

const CartProducts = ({data}) => {
    
  const dispatch = useDispatch();
 
  const { title, price, quantity,images} = data;
  
   
  return (
        <div className='cart-products-container'>
            <div>
                <img src={images[0]} alt="product"/>
            </div>
            <section>
                 <div>
                    <h3>{title}</h3>
                 </div>
                 <div className='price-content'>
                   <p>{price} $</p>
                 </div>
                 <div className='quantity'>
                   <p>{quantity}</p>
                 </div>
                 <div className='button-wrapper'>
                  {
                    quantity > 1 ? 
                    <button onClick={() => dispatch(decreaseItem(data))} ><RemoveIcon className='mines-icon'/></button> :
                    <button onClick={() => dispatch(removeItem(data))} ><DeleteIcon className='delete-icon'/></button>
                  }
                  <button onClick={() => dispatch(increaseItem(data))} ><AddIcon className='plus-icon'/></button>
                 </div>
            </section> 
        </div>
        
  )
}

export default CartProducts;