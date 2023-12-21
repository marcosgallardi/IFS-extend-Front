import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allow: false,
};

const allowConciliationSlice = createSlice({
  name: "allow",
  initialState,
  reducers: {
    setConciliation: (state, { payload }) => {
      state.allow = payload;
    },
  },
});


export const { setConciliation } = allowConciliationSlice.actions;

export default allowConciliationSlice.reducer;