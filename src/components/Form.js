import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from 'react-redux';
import "../assets/form.css";

const Form = () => {

    
    const productsData = useSelector(state => state.products);
    const [search,setSearch] = useState("");
    

    const changeHandler=(e)=>{
       setSearch(e.target.value); 
    }
    const searchProduct= productsData.products.filter((product) =>
    product.title.toLowerCase().startsWith(search.toLowerCase())
  );
  


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