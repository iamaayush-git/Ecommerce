import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishList: []
  },
  reducers: {
    addWishList: (state, action) => {
      const product = action.payload;
      const exists = state.wishList.find(item => item.id === product.id);
      if (!exists) {
        state.wishList.push(product);
      }
    },
    removeWishList: (state, action) => {
      const product = action.payload;
      state.wishList = state.wishList.filter(item => item.id !== product.id)
    }
  }
})
export const { addWishList, removeWishList } = wishlistSlice.actions
export default wishlistSlice.reducer;

