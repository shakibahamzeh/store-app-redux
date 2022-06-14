import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../assets/form.css";

const Form = () => {
    const [Search,setSearch] = useState("");
    const [isOpen ,setIsOpen] = useState(false);
    const changeHandler = (e) => {
       setSearch(e.target.value);
    }
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
             <input type="search" placeholder="Search..." onChange={changeHandler}/>
        </form>
        <div class="close" onClick={closeModal}>&times;</div>
     </section>
     }
    </form>
  )
}

export default Form