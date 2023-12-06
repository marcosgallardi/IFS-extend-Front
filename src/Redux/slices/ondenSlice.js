import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orden: {},
};

const ordenSlice = createSlice({
  name: "orden",
  initialState,
  reducers: {
    setOrden: (state, { payload }) => {
      state.orden = payload;
    },
  },
});


export const { setOrden } = ordenSlice.actions;

export default ordenSlice.reducer;