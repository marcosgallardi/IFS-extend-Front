import axios from "axios";
import { server } from "../../Helpers/pathServers";
import { setOrden } from "../slices/ordenSlice";

export const ordenAction = (cliente) => async (dispatch) => {
  
  try {
    const { data } = await axios.get(`${server}/order?cliente=${cliente}`);

    await dispatch(setOrden(data));
  } catch (error) {
    console.log(error.message);
  }
};
