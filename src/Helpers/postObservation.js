import axios from "axios";
import { server } from "./pathServers";

export const postObservation = async (observationsUpload) => {
  try {
    const { data } = await axios.post(
      `${server}/invoice/postObs`,
      observationsUpload
    );
    console.log(data);
    if (data.status === "success") {
      alert("Observacion cargada correctamente");
    } else {
      alert("Observacion no cargada");
    }
  } catch (error) {
    throw error.message;
  }
};
