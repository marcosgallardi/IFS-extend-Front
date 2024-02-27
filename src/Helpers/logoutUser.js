import axios from "axios";
import { server } from "./pathServers";

export const logoutUser = async () => {
  await axios.post(`${server}/auth/logout`, { logout: true });
};
