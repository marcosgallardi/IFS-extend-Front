import { useState } from "react";
import style from "./FacturaOrden.module.css";
import { useSelector } from "react-redux";

export const FacturaOrden = () => {
  
  const factura = useSelector(state => state.factura)
  console.log(factura)
  return(
    <div className={style.containerFact} >
      <h2>Factura</h2>
    </div>
  )
};
