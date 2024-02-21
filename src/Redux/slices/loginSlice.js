import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loged: false,
  role: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.loged = payload.true;
    },
    setRole: (state, { payload }) => {
      state.role = payload.role;
    },
  },
});

export const { setUser, setRole } = loginSlice.actions;

export default loginSlice.reducer;
