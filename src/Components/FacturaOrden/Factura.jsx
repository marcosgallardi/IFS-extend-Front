import { Item } from "./Item";
import style from "./FacturaOrden.module.css";
import { useSelector } from "react-redux";

export const Factura = () => {
  let { isCollapse } = useSelector((state) => state.sidebar);
  return (
    <>
      {!isCollapse ? (
        <form className={style.containerFactura}>
          <div className="row pt-3">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Divisa"} />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Tipo de cambio"} />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Imp bruto"} />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Cliente"} />
            </div>

            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Fecha de factura"} />
            </div>

            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Numero de factura"} />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Imp neto"} />
            </div>

            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Party type"} />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"invoice type"} />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Serie"} />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Impuesto"} />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <div className={style.inputWrapper}>
                <label htmlFor="">Observaciones:</label>
                <input />
              </div>
            </div>
          </div>
        </form>
      ) : (
        <form form className={style.containerFactura1}>
          <div className="row pt-3">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Divisa"} />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Tipo de cambio"} />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Imp bruto"} />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Cliente"} />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Fecha de factura"} />
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Numero de factura"} />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Imp neto"} />
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Party type"} />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"invoice type"} />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Serie"} />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Impuesto"} />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <div className={style.inputWrapper}>
                <label htmlFor="">Observaciones:</label>
                <input />
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
