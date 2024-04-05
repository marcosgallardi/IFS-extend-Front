import { server } from "../../Helpers/pathServers";
import axios from "axios";
import { getFactura } from "../slices/facturaSlice";

export const facturaAction =
  ({ series_id, invoice_no, identity,name }) =>
  async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${server}/invoice?series_id=${series_id}&invoice_no=${invoice_no}&identity=${identity}&name=${name}`
      );

      await dispatch(getFactura(data));

      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
