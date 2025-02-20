import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import productSlice from "./slices/productSlice";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";
import storage from "redux-persist/lib/storage"

const productPersistconfig = {
  key: 'product',
  storage,
}

const wishlistPersisConfig = {
  key: 'wishlist',
  storage
}


const rootReducer = combineReducers({
  product: persistReducer(productPersistconfig, productSlice),
  wishlist: persistReducer(wishlistPersisConfig, wishlistSlice),
  cart: cartSlice
});

const store = configureStore({
  reducer: rootReducer
})

export const persistor = persistStore(store)
export default store;