import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  facturaActual: [{}],
};

const facturaSlice = createSlice({
  name: "factura",
  initialState,
  reducers: {
    getFactura: (state, { payload }) => {
      if(Array.isArray(payload)){
        state.facturaActual = payload;
        return;
      }else{
        state.facturaActual = [payload];
        return;
      }
      
     
    },
  },
});

export const { getFactura } = facturaSlice.actions;

export default facturaSlice.reducer;
