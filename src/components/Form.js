import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../assets/form.css";

const Form = () => {
    const [Search,setSearch] = useState("");
    const changeHandler = (e) => {
       setSearch(e.target.value);
    }
  return (
    <form className='nav-form'>
      <input 
        type="text"
        placeholder='Search'
        onChange={changeHandler}
      />
      <SearchIcon className='search-icon'/>
    </form>
  )
}

export default Form