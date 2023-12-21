import React, { useEffect, useState } from "react";
import style from "./FacturaOrden.module.css";
import { useSelector } from "react-redux";

export const TablaOrden = ({ data }) => {
  let { isCollapse } = useSelector((state) => state.sidebar);
  const { allow } = useSelector((state) => state.allowConciliationSlice);
 

  const [orden, setOrden] = useState("");
  const [conciliatedValues, setConciliatedValues] = useState({});

  let headers = [
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
    "A_Conciliar",
  ];

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
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                    <td>
                      <input
                        type="number"
                        name={orden[rowIndex]}
                        value={conciliatedValues[rowIndex]?.value || ""}
                        onChange={(e) => onChangeConciliar(e, rowIndex)}
                        className={style.inputStylesNone}
                      />
                    </td>
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
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                    <td>
                      <input
                        type="number"
                        name={orden[rowIndex]}
                        value={conciliatedValues[rowIndex]?.value || ""}
                        onChange={(e) => onChangeConciliar(e, rowIndex)}
                        className={style.inputStylesNone}
                      />
                    </td>
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
