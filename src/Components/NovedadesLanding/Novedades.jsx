import image1 from "../../assets/gripe.jpg";
import cumple from "../../assets/cumple.jpg";
import uso from "../../assets/uso.jpg";
import style from "../NovedadesLanding/Novedades.module.css";

export const Novedades = () => {
  return (
    <div className={style.centeredContainer}>
      <img src={image1} alt="imagen gripe" className={style.tamañoImg} />
      <img src={cumple} alt="imagen gripe" className={style.tamañoImg} />
      <img src={uso} alt="imagen gripe" className={style.tamañoImg} />
    </div>
  );
};
