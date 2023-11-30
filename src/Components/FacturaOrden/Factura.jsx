import { Item } from "./Item";
import style from "./FacturaOrden.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Factura = () => {
  const initialState = [
    {
      CURRENCY: "",
      CURR_RATE: "",
      GROSS_AMOUNT: "",
      IDENTITY: "",
      INVOICE_DATE: "",
      INVOICE_NO: "",
      NET_CURR_AMOUNT: "",
      PARTY_TYPE: "",
      SERIES_ID: "",
      VAT_CURR_AMOUNT: "",
    },
  ];
  let { isCollapse } = useSelector((state) => state.sidebar);
  const [factura, setFactura] = useState(false);
  const { facturaActual } = useSelector((state) => state.factura);

  useEffect(() => {
    setFactura(facturaActual ? facturaActual : initialState);
  }, [facturaActual]);

  return (
    <>
      {!isCollapse ? (
        <form className={style.containerFactura}>
          <div className="row pt-3">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].CURRENCY : ""}
                name={"Divisa"}
              />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].CURR_RATE : ""}
                name={"Tipo de cambio"}
              />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].GROSS_AMOUNT : ""}
                name={"Imp bruto"}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].IDENTITY : ""}
                name={"Cliente"}
              />
            </div>

            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].INVOICE_DATE : ""}
                name={"Fecha de factura"}
              />
            </div>

            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].INVOICE_NO : ""}
                name={"Numero de factura"}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].NET_CURR_AMOUNT : ""}
                name={"Imp neto"}
              />
            </div>

            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].PARTY_TYPE : ""}
                name={"Party type"}
              />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"invoice type"} />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].SERIES_ID : ""}
                name={"Serie"}
              />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Impuesto"} />
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <div className={style.inputWrapper}>
                <label htmlFor="">Observaciones:</label>
                <input />
              </div>
            </div>
          </div>
        </form>
      ) : (
        <form form className={style.containerFactura1}>
          <div className="row pt-3">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].CURRENCY : ""}
                name={"Divisa"}
              />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].CURR_RATE : ""}
                name={"Tipo de cambio"}
              />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].GROSS_AMOUNT : ""}
                name={"Imp bruto"}
              />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].IDENTITY : ""}
                name={"Cliente"}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].INVOICE_DATE : ""}
                name={"Fecha de factura"}
              />
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].INVOICE_NO : ""}
                name={"Numero de factura"}
              />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].NET_CURR_AMOUNT : ""}
                name={"Imp neto"}
              />
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].PARTY_TYPE : ""}
                name={"Party type"}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"invoice type"} />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item
                valor={factura && factura[0] ? factura[0].SERIES_ID : ""}
                name={"Serie"}
              />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <Item valor={"algo"} name={"Impuesto"} />
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <div className={style.inputWrapper}>
                <label htmlFor="">Observaciones:</label>
                <input />
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
