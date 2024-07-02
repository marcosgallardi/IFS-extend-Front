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
  const { facturaActual } = useSelector((state) => state.factura);

  const dispatch = useDispatch();

  const [orden, setOrden] = useState("");

  const [conciliatedValues, setConciliatedValues] = useState({
    SERIES_ID: facturaActual[0]?.SERIES_ID,
    INVOICE_NO: facturaActual[0]?.INVOICE_NO,
    IDENTITY: facturaActual[0]?.IDENTITY,
  });

  let headers = [
    "A_Conciliar",
    "Observaciones",
    "Orden",
    "N_Linea",
    "N_Lanz",
    "Art_venta",
    "Planta",
    "Art_inv",
    "cantidad",
    "Unidad Medida",
    "Precio",
    "Descuento",
    "N_Cliente",
    "N_Item",
    "",
    "Fecha",
    "Divisa",
    "Estado",
    "Conciliado",
    "Resto Conciliar",
    "Total Con Descuento",
  ];

  useEffect(() => {
    if (allow === true) {
      if (Object.keys(conciliatedValues).length !== 0) {
        try {
          const execute = async () => {
            await postConciliation(conciliatedValues);
            await dispatch(ordenAction(data[0][10]));
            setConciliatedValues({});
            dispatch(allowAction(false));
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
    console.log(lineValue[14], facturaActual[0].CURRENCY, "darosssssss");
    if (lineValue[14] !== facturaActual[0].CURRENCY) {
      Swal.fire({
        icon: "error",
        title: "Invalido",
        text: "Error en divisa",
        footer: `La divisa de la linea seleccionada no coincide con la de la factura`,
        confirmButtonColor: "#0c3e62",
      });

      return;
    }
    if (facturaActual[0].GROSS_AMOUNT < value) {
      Swal.fire({
        icon: "error",
        title: "Invalido",
        text: "El valor ingresado es mayor al valor de la factura a conciliar",
        footer: `Esta intentando ingresar $ ${value} y el monto de la factura es de $ ${facturaActual[0].GROSS_AMOUNT}`,
        confirmButtonColor: "#0c3e62",
      });
      return;
    }
    if (value > lineValue[17]) {
      Swal.fire({
        icon: "error",
        title: "Invalido",
        text: "El valor ingresado es mayor al valor del monto a conciliar",
        footer: `Esta intentando ingresar $ ${value} y el monto a conciliar es de $ ${lineValue[17]}`,
        confirmButtonColor: "#0c3e62",
      });
      return;
    }
    let aux = name.split(",");

    setConciliatedValues(() => ({
      [rowIndex]: {
        value: Number(value),
        order_no: aux[0],
        line_no: aux[1],
        rel_no: aux[2],
        line_item_no: aux[11],
        catalog_no: aux[3],
        contract: aux[4],
        part_no: aux[5],
        buy_qty_due: Number(aux[6]),
        sales_unit_meas: aux[7],
        sale_unit_price: Number(aux[8]),
        series_id: facturaActual[0]?.SERIES_ID,
        invoice_no: facturaActual[0]?.INVOICE_NO,
        identity: facturaActual[0]?.IDENTITY,
        currency: facturaActual[0]?.CURRENCY,
        company: facturaActual[0]?.COMPANY,
        curr_rate: facturaActual[0]?.CURR_RATE,
        net_curr_amount: facturaActual[0]?.NET_CURR_AMOUNT,
        vat_curr_amount: facturaActual[0]?.VAT_CURR_AMOUNT,
        gross_amount: facturaActual[0]?.GROSS_AMOUNT,
        invoice_type: facturaActual[0]?.INVOICE_TYPE,
        invoice_id: facturaActual[0]?.INVOICE_ID,
      },
    }));
  };

  return (
    <>
      {orden && orden.length === 0 ? (
        <div className={style.tableContainer}>
          <div className={style.positionTextNoSearch}>
            <h3>No se encotraron ordenes para ese cliente</h3>
          </div>
        </div>
      ) : (
        <>
          {orden && !isCollapse ? (
            <div className={style.tableContainer}>
              <table className={style.excelTable}>
                <thead className={style.headerFixed}>
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
                          <ObservationMod
                            id={rowIndex}
                            name={orden[rowIndex]}
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
                      <th key={index} className="fs-6">
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
                          <ObservationMod
                            id={rowIndex}
                            name={orden[rowIndex]}
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
              <p className={style.messageOrder}>
                Realiza una busqueda de factura!
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};
