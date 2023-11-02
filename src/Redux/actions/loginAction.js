import { server } from "../../Helpers/pathServers";
import { setUser } from "../slices/loginSlice";
import axios from "axios";

export const loginAction = (username, password) => async (dispatch) => {
    console.log(username, password);
    try {
      const data = await axios.get(`${server}/auth?username=${username}&password=${password}`);
      dispatch(setUser(data));
      console.log(data, "console log de la data");
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  
