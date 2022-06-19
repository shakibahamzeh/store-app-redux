import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from 'react-redux';
import "../assets/form.css";

const Form = () => {

    
    const productsData = useSelector(state => state.products);
    const [search,setSearch] = useState("");
    const [isOpen ,setIsOpen] = useState(false);

    const changeHandler=(e)=>{
       setSearch(e.target.value); 
    }
    const searchProduct= productsData.products.filter((product) =>
    product.title.toLowerCase().startsWith(search.toLowerCase())
  );
  
   const openModal = () =>{
     if(window.innerWidth <= '768px'){
       setIsOpen(true);
       console.log(window.innerWidth)
     }
   }

    const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <form className='nav-form'>
      <input 
        type="text"
        placeholder='Search'
        onChange={changeHandler}
      />
      <SearchIcon className='search-icon' onClick={openModal}/>
     {
       isOpen &&  <section class="modal-wrapper">
        <form>
             <input type="search" placeholder="Search..." onChange={changeHandler} />
        </form>
        <div class="close" onClick={closeModal}>&times;</div>
     </section>
     }
    </form>
  )
}

export default Form