import axios from "axios";
import { server } from "../Helpers/pathServers";
import Swal from "sweetalert2";

export const postConciliation = async (conciliatedValues) => {
  try {
    let { status } = await axios.post(
      `${server}/invoice/post`,
      conciliatedValues
    );

    if (status === 200) {
      Swal.fire({
        icon: "success",
        title: "Factura conciliada",
        text: "Factura conciliada con exito!",

        confirmButtonColor: "#0c3e62",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Ocurrio un error!",
        text: "Hubo un error al intentar conciliar",

        confirmButtonColor: "#0c3e62",
      });
      return status;
    }
  } catch (error) {
    throw error;
  }
};
