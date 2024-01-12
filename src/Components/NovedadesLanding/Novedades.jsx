import { useState } from "react";
import { Card } from "../Cards/Card";
import { server } from "../../Helpers/pathServers";
import axios from "axios";
import style from "../NovedadesLanding/Novedades.module.css";
import image1 from "../../assets/gripe.jpg";
import cumple from "../../assets/cumple.jpg";
import uso from "../../assets/uso.jpg";

export const Novedades = ({ size }) => {
  const initialState = [null, null, null];
  const [image, setImage] = useState(initialState);

  const onSelectImage = ({ target }) => {
    const { name, files } = target;
    setImage({ ...image, [name]: files[0] });
  };

  const formData = new FormData();
  if (image[0] !== null) formData.append("img1", image[0]);
  if (image[1] !== null) formData.append("img2", image[1]);
  if (image[2] !== null) formData.append("img3", image[2]);

  const onSaveImage = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${server}/rrhh/nov`);

      if (data.url) {
        alert("Imagenes actualizadas");
      } else {
        alert("Error al actualizar las imagenes");
      }
    } catch (error) {
      throw error.message;
    }
  };

  return (
    <>
      <div className={style.centeredContainer}>
        <div className={style.cardContainer}>
          <Card image={image1} size={size} />
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop10"
            className={style.cardButton}>
            Cambiar
          </button>
        </div>

        <div className={style.cardContainer}>
          <Card image={cumple} size={size} />
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop11"
            className={style.cardButton}>
            Cambiar
          </button>
        </div>

        <div className={style.cardContainer}>
          <Card image={uso} size={size} />
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop12"
            className={style.cardButton}>
            Cambiar
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop10"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <form className="modal-dialog" onSubmit={onSaveImage}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Cambiar imagen
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="pb-2">Seleccione una imagen</p>
              <input
                type="file"
                name="1"
                value={image[1]}
                onChange={onSelectImage}
              />
              <p className="text-center pt-5">
                Se recomienda seleccionar una imagen de tamaño: <br /> Alto 500
                pixeles. Ancho 400 pixeles
              </p>
              <p className="text-center pt-3">
                puede redimensionar o recortar la imagen en este link:{" "}
                <a
                  href="https://www.iloveimg.com/es/redimensionar-imagen"
                  target="_blank"
                  rel="noopener noreferrer">
                  https://www.iloveimg.com/es/redimensionar-imagen
                </a>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Cerrar
              </button>
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop11"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <form className="modal-dialog" onSubmit={onSaveImage}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Cambiar imagen
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="pb-2">Seleccione una imagen</p>
              <input
                type="file"
                name="2"
                value={image[2]}
                onChange={onSelectImage}
              />
              <p className="text-center pt-5">
                Se recomienda seleccionar una imagen de tamaño: <br /> Alto 500
                pixeles. Ancho 400 pixeles
              </p>
              <p className="text-center pt-3">
                puede redimensionar o recortar la imagen en este link:{" "}
                <a
                  href="https://www.iloveimg.com/es/redimensionar-imagen"
                  target="_blank"
                  rel="noopener noreferrer">
                  https://www.iloveimg.com/es/redimensionar-imagen
                </a>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Cerrar
              </button>
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop12"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <form className="modal-dialog" onSubmit={onSaveImage}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Cambiar imagen
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="pb-2">Seleccione una imagen</p>
              <input
                type="file"
                name="3"
                value={image[3]}
                onChange={onSelectImage}
              />
              <p className="text-center pt-5">
                Se recomienda seleccionar una imagen de tamaño: <br /> Alto 500
                pixeles. Ancho 400 pixeles
              </p>
              <p className="text-center pt-3">
                puede redimensionar o recortar la imagen en este link:{" "}
                <a
                  href="https://www.iloveimg.com/es/redimensionar-imagen"
                  target="_blank"
                  rel="noopener noreferrer">
                  https://www.iloveimg.com/es/redimensionar-imagen
                </a>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Cerrar
              </button>
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
