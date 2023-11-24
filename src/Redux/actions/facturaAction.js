import { server } from "../../Helpers/pathServers";
import axios from "axios";

export const facturaAction =
  ({series_id, invoice_no, identity}) => async (dispatch) => {
    try {
      const { data } = await axios.get(`${server}/invoice`, {
        series_id,
        invoice_no,
        identity,
      });
      dispatch(getFactura(data));
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
