import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {isInCart , quantityCounter} from "../functions/functions.js";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import "../assets/productDetails.css";


const ProductDetail = (props) => {
    const id = useParams().id;
    const data = useSelector(state => state.products.products);
    const product = data[id];
    const {title,price,description,category,images} = product;
     
     const state = useSelector(state => state.cart);
     const dispatch = useDispatch();
  
  return (
    <div className='details-container'>
        {/*image*/}
          <div className='img-container'>
            <img src={images[0]} alt="product"/>
          </div>

         
          <div>

            {/*content*/} 
              <div className='details-content'>
                 <h2>{title}</h2>
                 <p>{description}</p>
              </div>
              <div className='more-detail'>
                <p>{category.name}</p>
                <p>{price} $</p>
              </div> 


           <div className='btns-details-wrapper'>


           <div className='btn-detail-container'>
           <div>
           {
             isInCart(state,product.id) ?
             <button onClick={()=> dispatch({type:"INCREASE_ITEM" , payload: product})} >
              <AddIcon className='plus-icon' />
             </button>
              :
              <button onClick={()=> dispatch({type:"ADD_ITEM" , payload: product})} className="add-cart">ADD TO CART</button>
           }
          </div>
          <div>
         
          {
             quantityCounter(state,product.id) > 0 && <span className='item-counter'>{quantityCounter(state,product.id)}</span>
          }
          </div>
          <div>
           {
             quantityCounter(state,product.id) === 1 && <button onClick={()=> dispatch({type:"REMOVE_ITEM" ,payload:product})} >
               <DeleteIcon className='delete-icon'/>
             </button>
          }
          </div>
          <div>
          {
            quantityCounter(state,product.id) > 1 && <button onClick={()=> dispatch({type:"DECREASE_ITEM" , payload: product})} >
              <RemoveIcon className='mines-icon'/>
            </button>
          }
          </div>
        
           </div>
           <div className='back-btn'>
               <Link to="/">Go Home</Link>
           </div>
           </div>

          

          </div>



          
          
    </div>
    
  )
}

export default ProductDetail