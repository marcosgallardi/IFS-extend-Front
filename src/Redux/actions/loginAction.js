import { server } from "../../Helpers/pathServers";
import { setRole, setUser } from "../slices/loginSlice";
import axios from "axios";

export const loginAction = (username, password, base) => async (dispatch) => {

  try {
    const { data } = await axios.get(
      `${server}/auth?username=${username}&password=${password}&base${base}`
    );
  
    dispatch(setUser(data));
    dispatch(setRole(data));
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
