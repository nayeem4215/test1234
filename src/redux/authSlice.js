import { createSlice } from "@reduxjs/toolkit";
let initialState = { user: null, token: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },
    unsetCredentials: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, unsetCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
