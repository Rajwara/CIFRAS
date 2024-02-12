import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      console.log("mhfww", action);
      state.isLogin = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.isLogin;
export const userReducer = userSlice.reducer;