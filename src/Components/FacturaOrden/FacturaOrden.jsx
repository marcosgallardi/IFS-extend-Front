import { useState } from "react";
import style from "./FacturaOrden.module.css";
import { useSelector } from "react-redux";
import { Factura } from "./Factura";

export const FacturaOrden = () => {
  const factura = useSelector((state) => state.factura);
  console.log(factura);
  return (
    <div className={style.containerFact}>
      <h3 className="pt-2">Factura del cliente:</h3>
      <Factura />
    </div>
  );
};
