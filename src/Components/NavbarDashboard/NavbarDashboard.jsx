import styles from "./NavbarDashboard.module.css";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { IoIosExit } from "react-icons/io";
import { useState } from "react";
import { facturaAction } from "../../Redux/actions/facturaAction";
import { useDispatch } from "react-redux";

export const NavbarDashboard = ({ close, factRender }) => {
  const dispatch = useDispatch();

  let initialState = {
    series_id: "",
    invoice_no: "",
    identity: "",
  };

  const [inputFact, setInputFact] = useState(initialState);

  const handleInputFact = ({ target }) => {
    setInputFact({
      ...inputFact,
      [target.name]: target.value,
    });
  };
  console.log(inputFact)
  const onSubmitFact = async (e) => {
    e.preventDefault();
    try {
      if (inputFact.series_id && inputFact.invoice_no) {
        await dispatch(facturaAction(inputFact));
      } else {
        alert("Faltan datos por llenar");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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

          <button className={styles.buttonLogout}>
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
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
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
                    data-bs-dismiss="modal">
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
