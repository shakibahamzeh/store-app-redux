import {combineReducers} from "redux";

import {productsReducer} from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import SearchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
    products : productsReducer,
    cart : cartReducer,
    search : SearchReducer
})


export default rootReducer;