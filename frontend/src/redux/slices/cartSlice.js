import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0

  },
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(item => item.id == product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
      else {
        state.cartItems.push({ ...product, quantity: 1 })
      }
    },
    removeCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(item => item.id == product.id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter(item => item.id != product.id)
      }
    }
  }
})

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;