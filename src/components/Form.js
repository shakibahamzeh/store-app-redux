import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../assets/form.css";
import Modal from './Modal';


const Form = ({changeHandler}) => {

  // modal search in 769 px and less  
  const [openModal,setOpenModal] = useState(false);
 
   {/*const openModalHandler = () => {
     if(window.innerWidth <= '769'){
       setOpenModal(true)
     }else{
       setOpenModal(false)
     }
   }*/}


  return (
    <form className='nav-form' onClick={(e)=>{e.stopPropagation()}}>
      <input 
        type="text"
        placeholder='Search'
        onChange={changeHandler}
      />
      <SearchIcon className='search-icon' onClick={() => setOpenModal(true)}/>
      {
        (window.innerWidth <= '769' ) && openModal && <Modal closeModal={setOpenModal}/>
      }
      
    </form>
  )
}

export default Form