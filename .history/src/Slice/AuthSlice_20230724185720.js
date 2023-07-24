/** @format */

import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
  name: "Auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  },

  reducers: {
    login(state, action) {
      state.user(action.payload)
      state.error=
    },
  },
});

export { Auth };
