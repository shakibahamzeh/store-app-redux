
import { useState } from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import Products from './components/Products';
import {Routes , Route } from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import NotFound from './components/NotFound';
import AboutUs from './components/AboutUs';
import Login from './components/Login';

import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react"


function App() {
  let persistor = persistStore(store);
  

  
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
       <div className="App">
         <Navbar/>
         <Routes>
           <Route path='/products' element={<Products/>}/>
           <Route path='/products/:id' element={<ProductDetail/>}/>
           <Route path='/contactUs' element={<ContactUs/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/blog' element={<Blog/>}/>
           <Route path='/bloge/page1'/>
           <Route path='/bloge/page2'/>
           <Route path='/aboutUs' element={<AboutUs/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/' element={<Products/>}/>
           <Route path='*' element={<NotFound/>}/>
          
         </Routes>
         <Footer/>
       </div>
       </PersistGate>
    </Provider>
    
  );
}

export default App;
