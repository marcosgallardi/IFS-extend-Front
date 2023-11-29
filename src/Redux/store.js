import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import facturaSlice from "./slices/facturaSlice";
import sideBarSlice from "./slices/sideBarSlice"

const reducer = combineReducers({
  login: loginSlice,
  factura: facturaSlice,
  sidebar:sideBarSlice
});

const store = configureStore({
  reducer: reducer,
});

export default store;
