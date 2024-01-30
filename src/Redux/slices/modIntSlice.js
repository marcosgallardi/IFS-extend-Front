

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: "",
      url: "",
    },
  ],
};

const modIntSlice = createSlice({
  name: "modInt",
  initialState,
  reducers: {
    setDataInt: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setDataInt } = modIntSlice.actions;

export default modIntSlice.reducer;
