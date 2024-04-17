import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orden: null,
};

const ordenSlice = createSlice({
  name: "orden",
  initialState,
  reducers: {
    setOrden: (state, { payload }) => {
      state.orden = payload;
    },
    setOrdenFiltered: (state, { payload }) => {
      state.orden = payload;
    },
  },
});

export const { setOrden, setOrdenFiltered } = ordenSlice.actions;

export default ordenSlice.reducer;
