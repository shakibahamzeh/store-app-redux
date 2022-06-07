import {combineReducers} from "redux";

import {productsReducer} from "./products/productsReducer";
import { categoriesReducer } from "./categories/categoriesReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    products : productsReducer,
    categories: categoriesReducer,
    cart : cartReducer
})


export default rootReducer;