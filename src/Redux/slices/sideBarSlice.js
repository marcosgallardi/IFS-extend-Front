import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapse: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    setSidebar: (state, { payload }) => {
      state.isCollapse = payload;
    },
  },
});

export const { setSidebar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
