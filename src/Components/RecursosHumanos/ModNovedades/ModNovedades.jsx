import React from "react";
import { Novedades } from "../../NovedadesLanding/Novedades";
import style from "../ModNovedades/ModNovedades.module.css";

export const ModNovedades = () => {
  return (
    <>
      <div className={style.positionModNov}>
        <Novedades size={style.sizeCardNov} />
      </div>
    </>
  );
};
