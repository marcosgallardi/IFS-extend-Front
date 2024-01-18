import { server } from "../../Helpers/pathServers";
import axios from "axios";
import { setDataNov } from "../slices/modNovSlice";

export const modNovAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${server}/rrhh/nov`);
    console.log(data[0],"data del mod nov")
    return dispatch(setDataNov(data[0]));
  } catch (error) {
    throw error.message;
  }
};
