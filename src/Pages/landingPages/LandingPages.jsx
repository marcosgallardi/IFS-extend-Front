import { useEffect } from "react";
import { Internos } from "../../Components/InternosLanding/Internos";
import { Menu } from "../../Components/MenuLanding/Menu";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Novedades } from "../../Components/NovedadesLanding/Novedades";
import style from "../landingPages/LandingPage.module.css";
import image from "../../assets/img-background/Maintenance-pana.svg";
import image1 from "../../assets/img-background/ManufacturingProcess-bro.svg";
import image2 from "../../assets/img-background/Eatingtogether-amico.svg";
import image3 from "../../assets/img-background/Tabletennis-rafiki.svg";
import { loginAction } from "../../Redux/actions/loginAction";
import { useDispatch } from "react-redux";
import { modNovAction } from "../../Redux/actions/modNovAction";
import { logoutUser } from "../../Helpers/logoutUser";

export const LandingPages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loginDefault = async () => {
      try {
        await dispatch(loginAction("consulta", "CONSULTA", ""));
        await dispatch(modNovAction());
      } catch (error) {
        console.error("Error during loginDefault:", error);
      }
    };

    loginDefault();
    return () => {
      logoutUser();
    };
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <h2 className={style.TitleInt} id="Novedades">
        Novedades
      </h2>
      <Novedades size={style.sizeCardLanding} />
      <h2 className={style.TitleInt1} id="Internos">
        Internos
      </h2>
      <div className={style.positionInternos1}>
        <img src={image} alt="" className={style.imgSize1} />
        <Internos size={style.internosImg} />
        <img src={image1} alt="" className={style.imgSize1} />
      </div>
      <h2 className={style.TitleInt1} id="Comedor">
        Menu
      </h2>
      <div className={style.positionInternos}>
        <img src={image2} alt="" className={style.imgSize} />

        <Menu size={style.MenuImg} />
        <img src={image3} alt="" className={style.imgSize} />
      </div>
      <div className={style.footerLanding}>
        <h5>Desarrollado por TI Sanmartin Argentina</h5>
      </div>
    </>
  );
};
