import axios from "axios";
import { server } from "./pathServers";

export const logoutUser = async () => {
  try {
    await axios.post(`${server}/auth/logout`, { logout: true });
    return;
  } catch (error) {
    throw error;
  }
};
