import style from "./FacturaOrden.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Factura } from "./Factura";
import { Orden } from "./Orden";
import { useState } from "react";
import { filterOrden } from "../../Redux/actions/filterOrdenSlice";

export const FacturaOrden = () => {
  let { orden } = useSelector((state) => state.orden);
  const dispatch = useDispatch();

  const [ordenNo, setOrdenNo] = useState("");

  const onHandleChangeOrden = ({ target }) => {
    setOrdenNo(target.value);
  };

  const orderFilter = orden?.filter((orden) => orden.ORDER_NO === ordenNo);

  const onSubmitOrden = (e) => {
    e.preventDefault();
    dispatch(filterOrden(orderFilter));
  };

  return (
    <div>
      <div className={style.containerFact}>
        <h3 className="pt-2">Factura del cliente:</h3>
      </div>
      <Factura />
      <div className={style.containerFact2}>
        <h3 className="pt-2">Ordenes de ventas:</h3>
        {orden && (
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal11"
            className={style.buttonSelect}>
            Filtrar Ordenes
          </button>
        )}
        <div
          className="modal fade"
          id="exampleModal11"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <form
            className="modal-dialog  modal-dialog-centered"
            onSubmit={onSubmitOrden}>
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
              <div className="modal-body">
                <label htmlFor="">Orden No</label>
                <input
                  type="number"
                  value={ordenNo}
                  onChange={onHandleChangeOrden}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className={style.buttonSelect1}
                  data-bs-dismiss="modal"
                  aria-label="Close">
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Orden orden={orden} />
    </div>
  );
};
