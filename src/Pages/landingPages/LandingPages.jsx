import { useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Novedades } from "../../Components/NovedadesLanding/Novedades";
import style from "../landingPages/LandingPage.module.css";
import { useDispatch } from "react-redux";
import { modNovAction } from "../../Redux/actions/modNovAction";

export const LandingPages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(modNovAction());
      } catch (error) {
        throw error.message;
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Novedades size={style.sizeCardLanding} />
    </div>
  );
};
