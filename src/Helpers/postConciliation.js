import axios from "axios";
import { server } from "../Helpers/pathServers";

export const postConciliation = async (conciliatedValues) => {
  console.log(conciliatedValues);
  try {
    let {status} = await axios.post(`${server}/invoice/post`, conciliatedValues);
    console.log(status);
    if(status === 200)
     alert("se concilio con exito")
    else
    alert("error al conciliar")
  
  } catch (error) {
    throw error;
  }
};
