import styles from "./NavbarDashboard.module.css";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { BsFillFloppy2Fill } from "react-icons/bs";
import { IoIosExit } from "react-icons/io";
import { useEffect, useState } from "react";
import { facturaAction } from "../../Redux/actions/facturaAction";
import { useDispatch, useSelector } from "react-redux";
import { ordenAction } from "../../Redux/actions/ordenAction";
import { allowAction } from "../../Redux/actions/allowAction";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Helpers/logoutUser";
import { getFactura } from "../../Redux/slices/facturaSlice";
import Swal from "sweetalert2";

export const NavbarDashboard = ({ close, factRender }) => {
  const dispatch = useDispatch();

  const { facturaActual } = useSelector((state) => state.factura);

  let initialState = {
    series_id: "",
    invoice_no: "",
    identity: "",
    name: "",
  };

  const [inputFact, setInputFact] = useState(initialState);

  const [openModal, setOpenModal] = useState("#exampleModal123");

  const navigate = useNavigate();

  const handleInputFact = ({ target }) => {
    setInputFact({
      ...inputFact,
      [target.name]: target.value,
    });
  };

  console.log(inputFact, initialState);
  const onSubmitFact = async (e) => {
    e.preventDefault();
    try {
      if (
        inputFact.series_id === "" &&
        inputFact.invoice_no === "" &&
        inputFact.identity === "" &&
        inputFact.name === ""
      ) {
        return Swal.fire({
          icon: "warning",
          title: "Campos vacios",
          text: "Ingresa datos en los distintos campos",

          confirmButtonColor: "#0c3e62",
        });
      }

      let data = await dispatch(facturaAction(inputFact));

      if (data.GROSS_AMOUNT === 0) {
        Swal.fire({
          icon: "warning",
          title: "Factura conciliada",
          text: "La factura que estas buscando ya fue conciliada!",

          confirmButtonColor: "#0c3e62",
        });
      }
      if (data === "Faltan datos")
        return Swal.fire({
          icon: "warning",
          title: "No hay datos",
          text: "No se encontro nada con los datos proporcionados",

          confirmButtonColor: "#0c3e62",
        });
      if (data.length === 0) return alert("datos incorrecto");
      if (data.length === 1) {
        await dispatch(ordenAction(data[0].IDENTITY));
        setInputFact(initialState);
      }

      if (data.length > 1) {
        setInputFact(initialState);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveConciliation = async () => {
    dispatch(await allowAction(true));
    dispatch(
      await facturaAction({
        series_id: facturaActual[0].SERIES_ID,
        invoice_no: facturaActual[0].INVOICE_NO,
        identity: facturaActual[0].IDENTITY,
      })
    );
  };

  const onLogoutClick = async () => {
    await logoutUser();
    navigate("/");
  };

  const handleFilterSearch = async (rowSelected) => {
    await dispatch(getFactura([rowSelected]));
    await dispatch(ordenAction(rowSelected.IDENTITY));
  };

  return (
    <>
      <nav className={`${close ? styles.navbar2 : styles.navbar}`}>
        <ul>
          {factRender ? (
            <span
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop">
              <PiMagnifyingGlassDuotone
                className={!close ? styles.icon : styles.icon2}
              />
            </span>
          ) : (
            <PiMagnifyingGlassDuotone
              className={!close ? styles.icon3 : styles.icon4}
            />
          )}
          {factRender ? (
            <span>
              <BsFillFloppy2Fill
                className={!close ? styles.icon : styles.icon2}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </span>
          ) : (
            <BsFillFloppy2Fill
              className={!close ? styles.icon3 : styles.icon4}
            />
          )}
          <button className={styles.buttonLogout} onClick={onLogoutClick}>
            Salir{" "}
            <span>
              <IoIosExit className={styles.iconLogout} />
            </span>
          </button>
        </ul>
      </nav>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title p-0" id="staticBackdropLabel">
                Buscar Factura
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className={styles.positionInput} onSubmit={onSubmitFact}>
                <label className="fs-5 fw-bold">Numero de serie</label>
                <input
                  type="text"
                  className={styles.inputLogin}
                  name="series_id"
                  value={inputFact.series_id}
                  onChange={handleInputFact}
                />{" "}
                <br />
                <label className="fs-5 fw-bold">Numero de factura</label>
                <input
                  type="text"
                  className={styles.inputLogin}
                  name="invoice_no"
                  value={inputFact.invoice_no}
                  onChange={handleInputFact}
                />
                <br />
                <label className="fs-5 fw-bold">Cliente</label>
                <input
                  type="text"
                  className={styles.inputLogin}
                  name="identity"
                  value={inputFact.identity}
                  onChange={handleInputFact}
                />
                <br />
                <label className="fs-5 fw-bold">Descripcion de cliente</label>
                <input
                  type="text"
                  className={styles.inputLogin}
                  name="name"
                  value={inputFact.name}
                  onChange={handleInputFact}
                />
                <br />
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal">
                    Cerrar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    data-bs-toggle="modal"
                    data-bs-target={openModal}>
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cargar conciliacion
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Esta seguro que quiere guardar esta conciliacion?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveConciliation}
                data-bs-dismiss="modal"
                aria-label="Close">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      {
        <div
          className="modal fade"
          id="exampleModal123"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ width: "100%" }}>
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Resultado de la busqueda
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <table className={styles.excelTable}>
                  <thead className={styles.borderTab}>
                    <tr>
                      <td>Cliente</td>
                      <td>Divisa</td>
                      <td>Serie</td>
                      <td>N° Factura</td>
                      <td>Fecha</td>
                      <td>Id Factura </td>
                      <td>Imp Bruto</td>
                      <td>Impuesto</td>
                      <td>Tipo de cambio</td>
                    </tr>
                  </thead>
                  <tbody>
                    {facturaActual &&
                      facturaActual !== "Faltan datos" &&
                      facturaActual?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          <td>{row.IDENTITY} </td>
                          <td>{row.CURRENCY} </td>
                          <td>{row.SERIES_ID} </td>
                          <td>{row.INVOICE_NO} </td>
                          <td>{row.INVOICE_DATE} </td>
                          <td>{row.INVOICE_ID} </td>
                          <td>{row.NET_CURR_AMOUNT} </td>
                          <td>{row.VAT_CURR_AMOUNT} </td>
                          <td>{row.CURR_RATE} </td>
                          <td>
                            <button
                              onClick={() => {
                                handleFilterSearch(row);
                              }}
                              className={styles.buttonSelect}
                              data-bs-dismiss="modal"
                              aria-label="Close">
                              Seleccionar
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <h6 className="pe-3 fs-5 py-2">
                  Seleccione una factura para continuar o cierre esta ventana.
                </h6>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};
