import React, { useEffect, useState } from "react";
import style from "./FacturaOrden.module.css";
import { useSelector } from "react-redux";

export const TablaOrden = ({ data }) => {
  let { isCollapse } = useSelector((state) => state.sidebar);

  const [orden, setOrden] = useState("");
  const [valueConciliar, setValueConciliar] = useState(0);

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

  const onChangeConciliar = (e) => {
    let { name, value } = e.target;
    let aux = name.split(",");
    console.log(aux);
    setValueConciliar(...valueConciliar, value[name]);
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
                        value={valueConciliar}
                        onChange={onChangeConciliar}
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
                        type="check"
                        name=""
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
