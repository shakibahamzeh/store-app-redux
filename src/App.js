import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import Products from './components/Products';
import {Routes , Route } from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <Provider store={store}>
       <div className="App">
         <Navbar/>
         <Routes>
           <Route path='/products' element={<Products/>}/>
           <Route path='/products/:id' element={<ProductDetail/>}/>
           <Route path='/contactUs' element={<ContactUs/>}/>
           <Route path='/' element={<Products/>}/>
         </Routes>
         <Footer/>
       </div>
    </Provider>
    
  );
}

export default App;
