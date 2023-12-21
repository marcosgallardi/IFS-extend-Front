import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  loginSlice,
  facturaSlice,
  sideBarSlice,
  ordenSlice,
  allowConciliationSlice,

} from "./slices";

const reducer = combineReducers({
  login: loginSlice,
  factura: facturaSlice,
  orden: ordenSlice,
  sidebar: sideBarSlice,
  allowConciliationSlice,

});

const store = configureStore({
  reducer: reducer,
});

export default store;
