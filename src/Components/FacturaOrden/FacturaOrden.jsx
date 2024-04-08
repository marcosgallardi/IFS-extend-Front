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
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal11"
          className={style.buttonSelect}>
          Filtrar Ordenes
        </button>
        <div
          className="modal fade"
          id="exampleModal11"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title p-0" id="exampleModalLabel">
                  Filtrar ordenes de ventas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className={style.buttonSelect1}
                  data-bs-dismiss="modal"
                  aria-label="Close">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Orden />
    </div>
  );
};
