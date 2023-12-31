import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import style from "./FacturaOrden.module.css";
import { useSelector } from "react-redux";
import { allowAction } from "../../Redux/actions/allowAction";
import { postConciliation } from "../../Helpers/postConciliation";

export const TablaOrden = ({ data }) => {
  let { isCollapse } = useSelector((state) => state.sidebar);
  const { allow } = useSelector((state) => state.allowConciliationSlice);

  const dispatch = useDispatch();

  const [orden, setOrden] = useState("");
  const [conciliatedValues, setConciliatedValues] = useState({});

  let headers = [
    "A_Conciliar",
    "Observaciones",
    "Order_no",
    "Line_no",
    "Rel_no",
    "Catalog_no",
    "Contracto",
    "Part_no",
    "Buy_qty_due",
    "Sales_unit_meas",
    "Sale_unit_price",
    "Discount",
    "Customer_no",
    "line_item_no",
    "Observaciones",
    "Dates",
    "State",
    "Conciliado",
    "Resto_Conciliar",
    "Total_Con_Descuento",
  ];

  useEffect(() => {
    if (allow === true) {
      if (Object.keys(conciliatedValues).length !== 0) {
        postConciliation(conciliatedValues);
      } else {
        alert("No hay valores para conciliar");
        dispatch(allowAction(false));
      }
    } else {
      return;
    }

    return () => {
      dispatch(allowAction(false));
    };
  }, [allow]);

  useEffect(() => {
    setOrden(data ? data : undefined);
  }, [data]);

  const onChangeConciliar = (e, rowIndex) => {
    let { value, name } = e.target;

    let aux = name.split(",");

    setConciliatedValues((prevValues) => ({
      ...prevValues,
      [rowIndex]: {
        value: Number(value),
        order_no: aux[0],
        line_no: aux[1],
        rel_no: aux[2],
      },
    }));
  };

  return (
    <>
      {orden && !isCollapse ? (
        <div className={style.tableContainer}>
          <table className={style.excelTable}>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="fs-6 ">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orden &&
                orden.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>
                      <input
                        type="number"
                        name={orden[rowIndex]}
                        value={conciliatedValues[rowIndex]?.value || ""}
                        onChange={(e) => onChangeConciliar(e, rowIndex)}
                        className={style.inputStylesNone}
                      />
                    </td>
                    <td>
                      <button
                        className={style.buttonObs}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        data-bs-whatever="@getbootstrap">
                        Nota
                      </button>
                    </td>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : isCollapse && orden ? (
        <div className={style.tableContainer1}>
          <table className={style.excelTable}>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="fs-6 ">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orden &&
                orden.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>
                      <input
                        type="number"
                        name={orden[rowIndex]}
                        value={conciliatedValues[rowIndex]?.value || ""}
                        onChange={(e) => onChangeConciliar(e, rowIndex)}
                        className={style.inputStylesNone}
                      />
                    </td>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={style.containerMessageOrder}>
          <p className={style.messageOrder}>Realiza una busqueda de factura!</p>
        </div>
      )}

      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Nota
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="message-text" class="col-form-label">
                    Observacion
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
