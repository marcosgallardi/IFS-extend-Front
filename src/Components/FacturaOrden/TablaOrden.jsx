import React from "react";
import style from "./FacturaOrden.module.css";

export const TablaOrden = ({ data = false }) => {
  return (
    <>
      {data ? (
        <div className={style.tableContainer}>
          <table className={style.excelTable}>
            <thead>
              <tr>
                {/* Encabezados de las columnas */}
                {headers?.map((header, index) => (
                  <th key={index} className="fs-6">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Filas de datos */}
              {data?.map((row, rowIndex) => (
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
        <h2>hola</h2>
      )}
    </>
  );
};
