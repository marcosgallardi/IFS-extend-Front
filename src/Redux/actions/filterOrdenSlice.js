import { setOrdenFiltered } from "../slices/ordenSlice";

export const filterOrden = (orden_no) => (dispatch) => {
  dispatch(setOrdenFiltered(orden_no));
  return;
};
