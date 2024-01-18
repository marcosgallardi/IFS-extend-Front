import { useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Novedades } from "../../Components/NovedadesLanding/Novedades";
import style from "../landingPages/LandingPage.module.css";

export const LandingPages = () => {
  return (
    <div>
      <Navbar />
      <Novedades size={style.sizeCardLanding} />
    </div>
  );
};
