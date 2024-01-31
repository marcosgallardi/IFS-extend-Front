import { Internos } from "../../Components/InternosLanding/Internos";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Novedades } from "../../Components/NovedadesLanding/Novedades";
import style from "../landingPages/LandingPage.module.css";

export const LandingPages = () => {
  return (
    <>
      <Navbar />

      <h2 className={style.TitleInt}>Novedades</h2>
      <Novedades size={style.sizeCardLanding} />
      <h2 className={style.TitleInt1}>Internos</h2>
      <div className={style.positionInternos}>
        <Internos size={style.internosImg} />
      </div>
    </>
  );
};
