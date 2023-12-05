import { useState } from "react";
import style from "./FacturaOrden.module.css";
import { useSelector } from "react-redux";
import { Factura } from "./Factura";
import { Orden } from "./Orden";

export const FacturaOrden = () => {
  const factura = useSelector((state) => state.factura);
  console.log(factura);
  return (
    <div>
      <div className={style.containerFact}>
        <h3 className="pt-2">Factura del cliente:</h3>
      </div>
      <Factura />
      <div className={style.containerFact2}>
        <h3 className="pt-2">Ordenes de ventas:</h3>
      </div>
      <Orden />
    </div>
  );
};
