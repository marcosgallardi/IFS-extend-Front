import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import facturaSlice from "./slices/facturaSlice";
import sideBarSlice from "./slices/sideBarSlice";
import ordenSlice from "./slices/ondenSlice";


const reducer = combineReducers({
  login: loginSlice,
  factura: facturaSlice,
  orden:ordenSlice,
  sidebar:sideBarSlice,

});

const store = configureStore({
  reducer: reducer,
});

export default store;
