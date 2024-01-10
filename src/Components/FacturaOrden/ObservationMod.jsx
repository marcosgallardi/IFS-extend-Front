import React from "react";

export const ObservationMod = ({ name, value, onChange }) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Nota
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="message-text" class="col-form-label">
                    Observacion
                  </label>
                  <textarea
                    className="form-control"
                    
                    id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
