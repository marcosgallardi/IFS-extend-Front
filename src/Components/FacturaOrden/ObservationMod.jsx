import React, { useState } from "react";
import { postObservation } from "../../Helpers/postObservation";

export const ObservationMod = ({ name, id }) => {
  const [observation, setObservation] = useState(name[12]);

  const onChangeObservation = (e) => {
    const { value } = e.target;
    setObservation(value);
  };

  const onSubmitObservation = async (e) => {
    e.preventDefault();
    try {
      postObservation({
        [id]: {
          observation,
          order_no: name[0],
          line_no: name[1],
          rel_no: name[2],
          line_item_no: name[11],
        },
      });
      
    } catch (error) {
      throw error.message;
    }
  };
  return (
    <>
      <form
        onSubmit={onSubmitObservation}
        className="modal fade"
        id={`exampleModal2${id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title p-0" id="exampleModalLabel">
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
                  <label for="message-text" className="col-form-label">
                    Observacion
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name={id}
                    onChange={onChangeObservation}
                    value={observation}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
