import React,{useState,useEffect} from 'react';
import basket from "../images/shopping-cart.png";
import '../assets/navbar.css';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/categories/categoriesAction';

const Navbar = () => {
    const navbarItems = [
        { id: 1, content: "Products" , pathName: "" },
        { id: 2, content: "Clothes" , pathName: "clothes" },
        { id: 3, content: "Shoes" , pathName: "shoes" },
        { id: 4, content: "Furniture" , pathName: "furniture" },
        { id: 5, content: "Electronics" , pathName: "electronics" },
        { id: 6, content: "Others" , pathName: "others"}
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
        <div className='menu-container'>
            <ul className='menu'>
              {
                navbarItems.map((item)=> <Link to={`/products/${item.pathName}`} key={item.id}><li onClick={() => setActiveId(item.id)} className={activeId === item.id ? "active" : ""}>{item.content}</li></Link>)
              }
            </ul>
        <div className='shopping-cart'>
           <Link to='/cart'>
                <img src={basket} alt="shopping-cart"/>
                <span className='counter'>{counter}</span>
           </Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar