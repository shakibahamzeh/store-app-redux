import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import "../assets/product.css";
import {isInCart , quantityCounter} from "../functions/functions.js";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';



const Product = ({productData}) => {
  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <div className='product-container'>
        <div>
         <h2>{productData.title}</h2>
        </div>
        <div>
          <img src={productData.images[1]} alt="product"/>
        </div>
        <div className='detail-container'>
          <div className='price'>
            <p>
              {productData.price} $
            </p>
          </div>
        <div>
          <Link to={`/products/${productData.id}`}>
               detail
         </Link>
        </div>
        </div>
        <div className='btn-container'>
          <div>
         {
            isInCart(state,productData.id) ?
            <button onClick={()=> dispatch({type:"INCREASE_ITEM" , payload: productData})} >
              <AddIcon className='plus-icon' />
            </button>
             :
             <button onClick={()=> dispatch({type:"ADD_ITEM" , payload: productData})} className="add-cart">ADD TO CART</button>
          }
          </div>
          <div>
         
          {
             quantityCounter(state,productData.id) > 0 && <span className='item-counter'>{quantityCounter(state,productData.id)}</span>
          }
          </div>
          <div>
           {
             quantityCounter(state,productData.id) === 1 && <button onClick={()=> dispatch({type:"REMOVE_ITEM" ,payload:productData})} >
               <DeleteIcon className='delete-icon'/>
             </button>
          }
          </div>
          <div>
          {
            quantityCounter(state,productData.id) > 1 && <button onClick={()=> dispatch({type:"DECREASE_ITEM" , payload: productData})} >
              <RemoveIcon className='mines-icon'/>
            </button>
          }
        </div>
        </div>
    </div>
        
    
  )
}

export default Product;