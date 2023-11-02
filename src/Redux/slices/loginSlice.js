import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loged: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.loged = payload;
    },
  },
});


export const { setUser } = loginSlice.actions;

export default loginSlice.reducer;
