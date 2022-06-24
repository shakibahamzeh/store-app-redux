import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Form from './Form';
import '../assets/navbar.css';




const Navbar = ({changeHandler}) => {
    //navbar Items
  const navbarItems = [
        { id: 1, content: "Products" , pathName: "" },
        { id: 2, content: "Blog" , pathName: "blog" },
        { id: 3, content: "AboutUs" , pathName: "aboutUs" },
        { id: 4, content: "ContactUs" , pathName: "contactUs" }, 
    ];
    //counter
    const counter = useSelector(state=>state.cart.itemsCounter);
    //authentication
     const {user, isAuthenticated} = useAuth0(); 
    //active navbar item
     const [activeId, setActiveId] = useState();
     // toggle nav
     const [toggleNav,setToggleNav] = useState(false);
    
     const toggleNavHandler = () => {
       setToggleNav(!toggleNav);
     }


   
    
  
  return (
    <nav className='navbar'>
        <div className='brand'>
            <h2>STORE</h2>
        </div>
        <div className='nav-container'>
              <div className={toggleNav ? "menu-container expanded" : "menu-container"}>
                
                <ul className='menu'>
                  {
                    navbarItems.map((item)=> <Link to={`/${item.pathName}`} key={item.id}><li onClick={() => setActiveId(item.id)} className={activeId === item.id ? "active" : ""}>{item.content}</li></Link>)
                  }
                </ul>
                 <MenuIcon className='menu-icon' onClick={toggleNavHandler}/>
                </div>
                
                <div className='form-container'>
                   <Form changeHandler={changeHandler}/>
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
                        {
                          isAuthenticated ? <div>
                            <img src={user.picture} alt="user"/>
                          </div> 
                          :
                          <PersonOutlineIcon className='user-icon'/>
                        }
                         
                      </Link>
                    </div>
                </section>
          </div>
    </nav>
  )
}

export default Navbar