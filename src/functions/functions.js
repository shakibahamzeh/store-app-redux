import { toast } from 'react-toastify';

const isInCart = (state,id)=>{
  const result = !!state.selectedItems.find( item => item.id=== id);
  return result;
}

const quantityCounter = (state,id) =>{
  const index = state.selectedItems.findIndex( item => item.id === id);
  if(index=== -1){
    return false
  }else{
    return state.selectedItems[index].quantity;
  }
}


export const notify = (text , type) => {
    if(type==="success"){
        toast.success(text)
    }else{
        toast.error(text)
    }
};
export{isInCart,quantityCounter}