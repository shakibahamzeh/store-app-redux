import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../assets/form.css";
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/products/productAction';


const Form = () => {

  // modal search in 769 px and less  
  const [openModal,setOpenModal] = useState(false);
   const [search,setSearch] = useState("");
   const dispatch = useDispatch();
      const changeHandler=(e)=>{
       setSearch(e.target.value); 
    }
 
   {/*const openModalHandler = () => {
     if(window.innerWidth <= '769'){
       setOpenModal(true)
     }else{
       setOpenModal(false)
     }
   }*/}
   const submitHandler = (e) => {
     e.preventDefualt();
     dispatch(fetchProducts(search))
   }

  return (
    <form className='nav-form' onClick={(e)=>{e.stopPropagation()}} onSubmit={submitHandler}>
      <input 
        type="text"
        placeholder='Search'
        onChange={(e) => changeHandler(e)}
        value={search}
      />
      <SearchIcon className='search-icon' onClick={() => setOpenModal(true)}/>
      {
        (window.innerWidth <= '769' ) && openModal && <Modal closeModal={setOpenModal} changeHandler={changeHandler} search={search}/>
      }
      
    </form>
  )
}

export default Form