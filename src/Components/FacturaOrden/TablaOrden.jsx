import React, { useEffect, useState } from "react";
import style from "./FacturaOrden.module.css";

export const TablaOrden = ({ data }) => {
  const [orden, setOrden] = useState("");
  let headers = [
    "order_no",
    "line_no",
    "rel_no",
    "catalog_no",
    "contracto",
    "part_no",
    "buy_qty_due",
    "sales_unit_mea",
    "sale_unit_price",
    "customer_no",
    "dates",
    "state",
  ];

  useEffect(() => {
    setOrden(data ? data : undefined);
  }, [data]);

  console.log(data);

  return (
    <>
      {orden ? (
        <div className={style.tableContainer}>
          <table className={style.excelTable}>
            <thead>
              <tr>
                {/* Encabezados de las columnas */}
                {headers.map((header, index) => (
                  <th key={index} className="fs-6">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Filas de datos */}
              {orden &&
                orden.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="fs-6">
                        {cell}
                      </td>
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
