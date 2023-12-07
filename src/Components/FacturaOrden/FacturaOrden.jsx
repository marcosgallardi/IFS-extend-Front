import style from "./FacturaOrden.module.css";

import { Factura } from "./Factura";
import { Orden } from "./Orden";

export const FacturaOrden = () => {
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
