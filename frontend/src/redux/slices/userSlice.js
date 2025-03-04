import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: localStorage.getItem("userName") || null,
    email: localStorage.getItem("email") || null,
    token: localStorage.getItem("token") || null,
    loginStatus: localStorage.getItem("status") || "false"
  },
  reducers: {
    setLogin: (state, action) => {
      const { user, token, email } = action.payload;
      state.userName = user;
      state.email = email;
      state.token = token;
      state.loginStatus = "true"
      localStorage.setItem("userName", user);
      localStorage.setItem("email", email);
      localStorage.setItem("token", token);
      localStorage.setItem("status", true);
    },
    setLogout: (state) => {
      state.userName = null;
      state.email = null;
      state.token = null;
      state.loginStatus = "false";
      localStorage.removeItem("userName");
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.setItem("status", false);
    }
  }
})

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer