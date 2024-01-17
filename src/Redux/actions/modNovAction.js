import { server } from "../../Helpers/pathServers";
import axios from "axios";
import { setDataNov } from "../slices/modNovSlice";

export const modNovAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${server}/rrhh/nov`);
    return dispatch(setDataNov(data[0]));
  } catch (error) {
    throw error.message;

  
  }
};
