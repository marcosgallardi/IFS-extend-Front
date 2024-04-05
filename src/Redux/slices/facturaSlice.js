import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  facturaActual: [{}],
};

const facturaSlice = createSlice({
  name: "factura",
  initialState,
  reducers: {
    getFactura: (state, { payload }) => {
      state.facturaActual = payload;
    },
  },
});

export const { getFactura } = facturaSlice.actions;

export default facturaSlice.reducer;
