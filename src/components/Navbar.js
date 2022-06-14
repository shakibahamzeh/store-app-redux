import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/categories/categoriesAction';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Form from './Form';
import '../assets/navbar.css';


const Navbar = () => {
    const navbarItems = [
        { id: 1, content: "Products" , pathName: "" },
        { id: 2, content: "Blog" , pathName: "blog" },
        { id: 3, content: "AboutUs" , pathName: "aboutUs" },
        { id: 4, content: "ContactUs" , pathName: "contactUs" }, 
    ];

     const [activeId, setActiveId] = useState();
     const dispatch = useDispatch();
     const categoriesData = useSelector(state => state.categories);
     const counter = useSelector(state=>state.cart.itemsCounter)
    useEffect(()=>{
        if(!categoriesData.categories.length) dispatch(fetchCategories())
    },[]);
    console.log(categoriesData.categories)
  return (
    <nav className='navbar'>
        <div className='brand'>
            <h2>STORE</h2>
        </div>
        <div className='nav-container'>
                <div className='menu-container'>
                 <ul className='menu'>
                  {
                    navbarItems.map((item)=> <Link to={`/${item.pathName}`} key={item.id}><li onClick={() => setActiveId(item.id)} className={activeId === item.id ? "active" : ""}>{item.content}</li></Link>)
                  }
                 </ul>
                 <MenuIcon className='menu-icon'/>
                </div>
                
                <div className='form-container'>
                   <Form/>
                </div>
                <section className='nav-icons'>
                    <div className='shopping-cart'>
                      <Link to='/cart'>
                          <ShoppingCartIcon className='cart-icon'/>
                          <span className='counter'>{counter}</span>
                      </Link>
                    </div>
                    <div className='user-container'>
                      <Link to="/login">
                         <PersonOutlineIcon className='user-icon'/>
                      </Link>
                    </div>
                </section>
          </div>
    </nav>
  )
}

export default Navbar