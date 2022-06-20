// import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";


const persistConfig = {
    key: "root",
    storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer);
const store = configureStore({ reducer: persistedReducer });

export default store;