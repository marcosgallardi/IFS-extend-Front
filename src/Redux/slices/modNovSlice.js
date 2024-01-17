import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: "",
      url: "",
    },
  ],
};

const modNovSlice = createSlice({
  name: "modNov",
  initialState,
  reducers: {
    setDataNov: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setDataNov } = modNovSlice.actions;

export default modNovSlice.reducer;
