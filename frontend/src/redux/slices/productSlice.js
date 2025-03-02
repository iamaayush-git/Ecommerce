import { createSlice } from "@reduxjs/toolkit";
  
const productSlice = createSlice({
  name: "products",
  initialState: {
    item: [],
    loading: false,
    error: null
  },
  reducers: {
    setProducts: (state, action) => {
      state.item = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = false;
      state.error = action.payload
    }
  },
})

export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
