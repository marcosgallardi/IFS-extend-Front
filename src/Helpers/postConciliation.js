import axios from "axios";
import { server } from "../Helpers/pathServers";

export const postConciliation = async (conciliatedValues) => {
  console.log(conciliatedValues);
  try {
    let data = await axios.post(`${server}/ordInv/post`, conciliatedValues);
    console.log(data);
  } catch (error) {
    throw error;
  }
};
