import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  loginSlice,
  facturaSlice,
  sideBarSlice,
  ordenSlice,
  allowConciliationSlice,
  modNovSlice,
} from "./slices";
import modIntSlice from "./slices/modIntSlice";

const reducer = combineReducers({
  login: loginSlice,
  factura: facturaSlice,
  orden: ordenSlice,
  sidebar: sideBarSlice,
  allowConciliationSlice,
  modNov: modNovSlice,
  modInt: modIntSlice,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
