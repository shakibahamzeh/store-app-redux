import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Form from './Form';
import '../assets/navbar.css';
import { useAuth0 } from '@auth0/auth0-react';


const Navbar = () => {
    const {user, isAuthenticated} = useAuth0();
    const navbarItems = [
        { id: 1, content: "Products" , pathName: "" },
        { id: 2, content: "Blog" , pathName: "blog" },
        { id: 3, content: "AboutUs" , pathName: "aboutUs" },
        { id: 4, content: "ContactUs" , pathName: "contactUs" }, 
    ];

     const [activeId, setActiveId] = useState();
     const counter = useSelector(state=>state.cart.itemsCounter);

     //menu
     const [toggleMenu, setToggleMenu] = useState(false);
     const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    }
  
    
    useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);
     return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, []);


  return (
    <nav className='navbar'>
        <div className='brand'>
            <h2>STORE</h2>
        </div>
        <div className='nav-container'>
                <div className='menu-container'>
                 {
                   ((toggleMenu || screenWidth > 769) && ( <ul className='menu'>
                  {
                    navbarItems.map((item)=> <Link to={`/${item.pathName}`} key={item.id}><li onClick={() => setActiveId(item.id)} className={activeId === item.id ? "active" : ""}>{item.content}</li></Link>)
                  }
                   
                 </ul>))
                 } 
                
                 <MenuIcon className='menu-icon' onClick={toggleNav} />
                
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