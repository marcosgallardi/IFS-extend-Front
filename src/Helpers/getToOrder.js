import { useDispatch } from "react-redux";
import { ordenAction } from "../Redux/actions/ordenAction";

export const getToOrder = async (cliente) => {
  const dispatch = useDispatch();
console.log(cliente,"clg del cliente")
  try {
    await dispatch(ordenAction(cliente));
  } catch (error) {
    throw error.message;
  }
};
