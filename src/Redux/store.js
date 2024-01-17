import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  loginSlice,
  facturaSlice,
  sideBarSlice,
  ordenSlice,
  allowConciliationSlice,
  modNovSlice,
} from "./slices";

const reducer = combineReducers({
  login: loginSlice,
  factura: facturaSlice,
  orden: ordenSlice,
  sidebar: sideBarSlice,
  allowConciliationSlice,
  modNov: modNovSlice,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
