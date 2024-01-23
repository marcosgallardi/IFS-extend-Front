import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import style from "./FacturaOrden.module.css";
import { useSelector } from "react-redux";
import { allowAction } from "../../Redux/actions/allowAction";
import { postConciliation } from "../../Helpers/postConciliation";
import { ObservationMod } from "./ObservationMod";

export const TablaOrden = ({ data }) => {
  let { isCollapse } = useSelector((state) => state.sidebar);
  const { allow } = useSelector((state) => state.allowConciliationSlice);

  const dispatch = useDispatch();

  const [orden, setOrden] = useState("");
  const [observation, setObservation] = useState({});
  const [conciliatedValues, setConciliatedValues] = useState({});
  console.log(observation, "log de la observacions!!!");
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

  const observar =
    orden &&
    orden.map((row) => {
      return row[12];
    });

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
    setObservation(observar);
  }, [data]);

  const onChangeObservartion = (e) => {
    const { value, name } = e.target;
    setObservation((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

  };

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
        line_item_no: aux[11],
      },
    }));
  };

  const observationFiltered = Object.keys(observation)
    .filter((key) => observation[key] !== null)
    .reduce((acc, key) => {
      acc[key] = observation[key];
      return acc;
    }, {});



  console.log(objetoFiltrado);

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
                        data-bs-target={`#exampleModal2${rowIndex}`}
                        data-bs-whatever="@getbootstrap">
                        Nota
                      </button>
                      <ObservationMod
                        id={rowIndex}
                        value={observation[rowIndex] || ""}
                        name={row}
                        onChange={(e) => onChangeObservartion(e, rowIndex)}
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
