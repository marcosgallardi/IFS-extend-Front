import { Route, Routes } from "react-router-dom";
import { LandingPages } from "./Pages/landingPages/LandingPages";
import { LoginPages } from "./Pages/loginPages/LoginPages";
import { HomePages } from "./Pages/homePages/HomePages";

import { landingRoute, loginRoute, homeRoute } from "./Helpers/Routes";
import { PrivateRoute } from "./Helpers/PrivateRoute";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={landingRoute} element={<LandingPages />} />
        <Route path={loginRoute} element={<LoginPages />} />

        <Route
          path={homeRoute}
          element={
            <PrivateRoute>
              <HomePages />
            </PrivateRoute>
          }
        />

        <Route path="/*" element={<LandingPages />} />
      </Routes>
    </>
  );
};
