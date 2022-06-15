import React from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem, decreaseItem, increaseItem } from "../redux/cart/cartAction";
import '../assets/cartProducts.css';

const CartProducts = ({data}) => {
    
  const dispatch = useDispatch();
 
  const { title, price, quantity} = data;
  
   
  return (
        <div className='cart-products-container'>
          
            <div>
                <h3>{title}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch(decreaseItem(data))} ><RemoveIcon/></button> :
                    <button onClick={() => dispatch(removeItem(data))} ><DeleteIcon/></button>
                }
                <button onClick={() => dispatch(increaseItem(data))} ><AddIcon/></button>
            </div>
        </div>
        
  )
}

export default CartProducts;