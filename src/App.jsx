import { LandingPages } from "./Pages/landingPages/LandingPages";
import { LoginPages } from "./Pages/loginPages/LoginPages";
import { Route, Routes } from "react-router-dom";
import {landingRoute} from "./Helpers/Routes";

export const App = () => {
  console.log(landingRoute);
  return (
    <>
      <Routes>
        <Route path={landingRoute} element={<LandingPages />} />
        <Route path={"login"} element={<LoginPages />} />

      </Routes>
      
    </>
  );
};
