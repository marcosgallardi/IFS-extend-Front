import axios from "axios";
import { server } from "../Helpers/pathServers";

export const postConciliation = async (conciliatedValues) => {
  try {
    let { status } = await axios.post(
      `${server}/invoice/post`,
      conciliatedValues
    );

    if (status === 200) alert("se concilio con exito");
    else {
      alert("error al conciliar");
      return status;
    }
  } catch (error) {
    throw error;
  }
};
