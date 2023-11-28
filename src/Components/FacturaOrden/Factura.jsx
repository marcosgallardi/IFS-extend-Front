import { Item } from "./Item";

export const Factura = () => {
  return (
    <form className="form-group">
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
          <label htmlFor="">Observaciones:</label>
          <textarea />
        </div>
      </div>
    </form>
  );
};
