import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCollapse: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    setSidebar: (state, { payload }) => {
        console.log(payload,"clg del slice")
      state.isCollapse = payload;
    },
  },
});


export const { setSidebar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
