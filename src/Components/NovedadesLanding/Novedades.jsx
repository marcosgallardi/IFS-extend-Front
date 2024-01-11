import image1 from "../../assets/gripe.jpg";
import cumple from "../../assets/cumple.jpg";
import uso from "../../assets/uso.jpg";
import style from "../NovedadesLanding/Novedades.module.css";
import { Card } from "../Cards/Card";

export const Novedades = ({ size }) => {
  return (
    <>
      <div className={style.centeredContainer}>
        <Card image={image1} size={size} />

        <Card image={cumple} size={size} />
        <Card image={uso} size={size} />
      </div>
    </>
  );
};
