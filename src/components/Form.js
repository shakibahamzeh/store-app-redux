import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../assets/form.css";
import Modal from './Modal';
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/search/searchActions";
import { selectTerm } from "../redux/search/selectors";


const Form = () => {

  // modal search in 769 px and less  
  const [openModal,setOpenModal] = useState(false);
  const term = useSelector(selectTerm);
	const dispatch = useDispatch();
	const changeHandler = (e) => {
		dispatch(setSearchTerm(e.target.value));
	};

  return (
    <form className='nav-form' onClick={(e)=>{e.stopPropagation()}} >
      <input 
        type="text"
        placeholder='Search'
        value={term}
        onChange={e=>changeHandler(e)}
      />
      <SearchIcon className='search-icon' onClick={() => setOpenModal(true)}/>
      {
        (window.innerWidth <= '769' ) && openModal && <Modal closeModal={setOpenModal} search={term} changeHandler={changeHandler}/>
      }
      
    </form>
  )
}

export default Form;