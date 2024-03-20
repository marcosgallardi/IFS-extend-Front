import styles from "./NavbarDashboard.module.css";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { BsFillFloppy2Fill } from "react-icons/bs";
import { IoIosExit } from "react-icons/io";
import { useState } from "react";
import { facturaAction } from "../../Redux/actions/facturaAction";
import { getToOrder } from "../../Helpers/getToOrder";
import { useDispatch } from "react-redux";
import { ordenAction } from "../../Redux/actions/ordenAction";
import { allowAction } from "../../Redux/actions/allowAction";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Helpers/logoutUser";

export const NavbarDashboard = ({ close, factRender }) => {
  const dispatch = useDispatch();

  let initialState = {
    series_id: "",
    invoice_no: "",
    identity: "",
  };

  const [inputFact, setInputFact] = useState(initialState);
  const [showSearchingFilter, setShowSearchingFilter] = useState(false);

  const navigate = useNavigate();

  const handleInputFact = ({ target }) => {
    setInputFact({
      ...inputFact,
      [target.name]: target.value,
    });
  };

  const onSubmitFact = async (e) => {
    e.preventDefault();
    try {
      if (inputFact.series_id && inputFact.invoice_no && inputFact.identity) {
        let data = await dispatch(facturaAction(inputFact));
        await dispatch(ordenAction(data[0].IDENTITY));
        return;
      } else if (inputFact.series_id && inputFact.invoice_no) {
        setShowSearchingFilter(true);
        console.log("busqueda por N serie y factura");
        return;
      } else if (inputFact.invoice_no && inputFact.identity) {
        setShowSearchingFilter(true);
        console.log("busqueda por n factura y cliente");
      } else if (inputFact.identity && inputFact.series_id) {
        setShowSearchingFilter(true);
        console.log("busqueda por cliente y serie");
      } else if (inputFact.invoice_no) {
        setShowSearchingFilter(true);
        console.log("busqueda por n factura");
        return;
      } else if (inputFact.identity) {
        setShowSearchingFilter(true);
        console.log("busqueda por cliente");
      } else {
        alert("No puedes buscar solo por el numero de serie");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveConciliation = () => {
    dispatch(allowAction(true));
  };

  const onLogoutClick = async () => {
    await logoutUser();
    navigate("/");
  };
  console.log(showSearchingFilter);

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
                  name="invoice_no"
                  value={inputFact.invoice_no}
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
                    data-bs-target={showSearchingFilter && "#exampleModal1"}>
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
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Resultado de la busqueda
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setShowSearchingFilter(false)}></button>
            </div>
            <div className="modal-body">
              Se encontraron {"1958"} facturas seleccion una
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setShowSearchingFilter(false)}>
                Seleccionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
