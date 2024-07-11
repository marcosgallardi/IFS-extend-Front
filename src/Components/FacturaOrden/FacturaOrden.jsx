import style from "./FacturaOrden.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Factura } from "./Factura";
import { Orden } from "./Orden";
import { useState } from "react";
import { filterOrden } from "../../Redux/actions/filterOrdenSlice";
import { ordenAction } from "../../Redux/actions/ordenAction";
import Swal from "sweetalert2";

export const FacturaOrden = () => {
  let { orden } = useSelector((state) => state.orden);
  const { facturaActual } = useSelector((state) => state.factura);
  const dispatch = useDispatch();

  const [ordenNo, setOrdenNo] = useState({
    norder: 0,
    divisa: "",
  });

  const onHandleChangeOrden = ({ target, name }) => {
    setOrdenNo({
      ...ordenNo,
      [target.name]: target.value,
    });
  };
  console.log(orden);

  const orderFilter = orden?.filter(
    (orden) => orden.ORDER_NO === ordenNo.norder
  );

  console.log(orderFilter);

  const divisaFilter = orden?.filter(
    (orden) => orden.CURRENCY === ordenNo.divisa.toUpperCase()
  );

  const handleResetFilters = async () => {
    dispatch(await ordenAction(facturaActual[0].IDENTITY));
  };

  const onSubmitOrden = async (e) => {
    e.preventDefault();
    if (ordenNo.norder !== "") {
      if (orderFilter.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "No hay datos",
          text: "No se encontro nada con los datos proporcionados",

          confirmButtonColor: "#0c3e62",
        });
        setOrdenNo({
          norder: "",
          divisa: "",
        });
      } else {
        dispatch(await filterOrden(orderFilter));
        return setOrdenNo({
          norder: "",
          divisa: "",
        });
      }
    } else if (ordenNo.divisa !== "") {
      if (divisaFilter.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "No hay datos",
          text: "No se encontro nada con los datos proporcionados",

          confirmButtonColor: "#0c3e62",
        });
        setOrdenNo({
          norder: "",
          divisa: "",
        });
      } else {
        dispatch(await filterOrden(divisaFilter));
        return setOrdenNo({
          norder: "",
          divisa: "",
        });
      }
    }
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
          <>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal11"
              className={style.buttonSelect}>
              Filtrar Ordenes
            </button>
            <br />
            <button
              className={style.buttonSelect2}
              onClick={handleResetFilters}>
              Resetear filtros
            </button>
          </>
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
                <div className={style.formsFilter}>
                  <label htmlFor="" className="fs-6 fw-bold">
                    N° Orden:{" "}
                  </label>

                  <input
                    type="number"
                    name="norder"
                    className={style.inputLogin}
                    value={ordenNo.norder}
                    onChange={onHandleChangeOrden}
                  />
                  <label htmlFor="" className="fs-6 fw-bold">
                    Divisa{" "}
                  </label>

                  <input
                    type="text"
                    name="divisa"
                    value={ordenNo.divisa}
                    className={style.inputLogin}
                    onChange={onHandleChangeOrden}
                  />
                </div>
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
