import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import style from "./Menu.module.css";
import { Loading } from "../LoadingComponents/Loading";
import { modNovAction } from "../../Redux/actions/modNovAction";
import axios from "axios";
import { server } from "../../Helpers/pathServers";

export const Menu = ({ size, showButtonChange }) => {
  const initialState = {
    id: "",
    image: null,
  };

  const [loading, setLoading] = useState(false);

  let aux = useSelector((state) => state.modNov.data);

  const [image, setImage] = useState(initialState);

  const [imagesCurrent, setImagesCurrent] = useState(null);

  const dispatch = useDispatch();

  const fileInputRef = useRef(null);

  const onSelectImage = ({ target }) => {
    const { name, files } = target;
    setImage({ ...image, id: name, image: files[0] });
  };

  const formData = new FormData();
  formData.append("id", image.id);
  formData.append("image", image.image);

  const onSaveImage = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${server}/rrhh/nov`, formData);

      if (data.message === "Modificado con exito") {
        fileInputRef.current.value = null;
        setImage(initialState);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        await dispatch(modNovAction());
      } else {
        alert("Error al actualizar las imagenes");
      }
    } catch (error) {
      throw error.message;
    }
  };

  const auxiliar = imagesCurrent?.find((image) => image.ID === 5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(modNovAction());
      } catch (error) {
        throw error.message;
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setImagesCurrent(aux);
  }, [onSaveImage]);

  return (
    <div>
      {!loading ? (
        <>
          <div className={showButtonChange && "position-relative mt-5"}>
            <img
              src={auxiliar ? auxiliar?.URL : null}
              alt=""
              className={`${size ? size : style.cardSize} ${style.default}`}
            />
            {showButtonChange && (
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop20"
                className={style.cardButton}>
                Cambiar
              </button>
            )}
          </div>

          <div
            className="modal fade"
            id="staticBackdrop20"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <form className="modal-dialog" onSubmit={onSaveImage}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title  p-0" id="staticBackdropLabel">
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
                    name="5"
                    onChange={onSelectImage}
                    ref={fileInputRef}
                  />
                  <p className="text-center pt-5">
                    Se recomienda seleccionar una imagen de tamaño: <br /> Alto
                    800 pixeles. Ancho 1000 pixeles
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
      ) : (
        <Loading />
      )}
    </div>
  );
};
