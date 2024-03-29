import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import style from "./FacturaOrden.module.css";
import { useSelector } from "react-redux";
import { allowAction } from "../../Redux/actions/allowAction";
import { postConciliation } from "../../Helpers/postConciliation";
import { ObservationMod } from "./ObservationMod";
import Swal from "sweetalert2";
import { ordenAction } from "../../Redux/actions/ordenAction";

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
    "",
    "Dates",
    "State",
    "Conciliado",
    "Resto_Conciliar",
    "Total_Con_Descuento",
  ];

  useEffect(() => {
    if (allow === true) {
      if (Object.keys(conciliatedValues).length !== 0) {
        try {
          const execute = async () => {
            await postConciliation(conciliatedValues);
            await dispatch(ordenAction(data[0][10]));
            setConciliatedValues({});
          };
          execute();
        } catch (error) {
          error.message;
        }
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

  const onChangeConciliar = (e, rowIndex, lineValue) => {
    let { value, name } = e.target;

    if (value > lineValue[16]) {
      Swal.fire({
        icon: "error",
        title: "Invalido",
        text: "El valor ingresado es mayor al valor del monto a conciliar",
        footer: `Esta intentando ingresar $ ${value} y el monto a conciliar es de $ ${lineValue[16]}`,
        confirmButtonColor: "#0c3e62",
      });
      return;
    }
    let aux = name.split(",");

    setConciliatedValues((prevValues) => ({
      ...prevValues,
      [rowIndex]: {
        value: Number(value),
        order_no: aux[0],
        line_no: aux[1],
        rel_no: aux[2],
        line_item_no: aux[11],
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
                        onChange={(e) =>
                          onChangeConciliar(e, rowIndex, orden[rowIndex])
                        }
                        className={style.inputStylesNone}
                      />
                    </td>
                    <td>
                      <button
                        className={style.buttonObs}
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal2${rowIndex}`}
                        data-bs-whatever="@getbootstrap">
                        Nota
                      </button>
                      <ObservationMod id={rowIndex} name={orden[rowIndex]} />
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
    </>
  );
};
