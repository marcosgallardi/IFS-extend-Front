import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginRoute } from "./Routes";

export const PrivateRoute = ({ children }) => {

    

  let { loged } = useSelector((state) => state.login);

  console.log(loged,"log de logedddd")

  return loged ? children : <Navigate to={loginRoute} />;
};
