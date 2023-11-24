import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import facturaSlice from "./slices/facturaSlice";

const reducer = combineReducers({
  login: loginSlice,
  factura: facturaSlice,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
