import { server } from "../../Helpers/pathServers";
import axios from "axios";
import { getFactura } from "../slices/facturaSlice";

export const facturaAction =
  ({ series_id, invoice_no, identity }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${server}/invoice?series_id=${series_id}&invoice_no=${invoice_no}&identity=${identity}`
      );

      await dispatch(getFactura(data));

      console.log(data, "log de la data de la accion");
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
