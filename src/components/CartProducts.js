import React from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem, decreaseItem, increaseItem } from "../redux/cart/cartAction";

const CartProducts = (props) => {
    
  const dispatch = useDispatch();
  const { title, price, quantity} = props.data;
  
  return (
        <div>
           {/*<img  src={images[0]} alt="product" />*/}
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
                    <button onClick={() => dispatch(decreaseItem(props.data))} ><RemoveIcon/></button> :
                    <button onClick={() => dispatch(removeItem(props.data))} ><DeleteIcon/></button>
                }
                <button onClick={() => dispatch(increaseItem(props.data))} ><AddIcon/></button>
            </div>
        </div>
        
  )
}

export default CartProducts;