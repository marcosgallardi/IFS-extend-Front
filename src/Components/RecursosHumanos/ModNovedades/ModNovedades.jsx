import React from "react";
import { Novedades } from "../../NovedadesLanding/Novedades";
import style from "../ModNovedades/ModNovedades.module.css";

export const ModNovedades = () => {
  return (
    <div>
      <h2 className={style.positionTitle}>Modificar Novedades</h2>
      <div className={style.positionModNov}>
        <Novedades size={style.sizeCardNov} showButtonChange={true}/>
      </div>
    </div>
  );
};
