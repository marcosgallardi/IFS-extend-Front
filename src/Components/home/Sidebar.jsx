import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import style from "./Sidebar.module.css";
import tuerca from "../../assets/Tuerca.png";

export const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [toggleAdm, setToggleAdm] = useState(false);
  const [toggleRRHH, setToggleRRHH] = useState(false);

  const handleToggleMenu = () => {
    setIsCollapse(!isCollapse);
  };

  const handleToggleAdm = () => {
    setToggleAdm(!toggleAdm);
  };

  const handleToggleRRHH = () => {
    setToggleRRHH(!toggleRRHH);
  };
  return (
    <div>
      <div
        style={
          isCollapse
            ? { width: "5px", transition: "width 0.5s ease-in-out" }
            : { width: "18vw", transition: "width 0.5s ease-in-out" }
        }
        className={`${style.mainContainer} ${
          isCollapse ? style.collapsed : ""
        }`}>
        <div
          style={
            isCollapse
              ? {
                  transform: "translateX(-150%)",
                  transition: "transform .8s ease-in-out",
                }
              : {}
          }>
          <button
            className={isCollapse ? style.btnCollapsed : style.buttonDropDown}
            onClick={handleToggleMenu}>
            <img src={tuerca} alt="" style={{ width: "55px" }} />
          </button>
          {isCollapse ? <p className={style.text}>Abrir barra</p> : null}
          <div className={style.filteredContent}>
            <div className={style.filters} onClick={handleToggleRRHH}>
              Recursos Humanos
            </div>
            {toggleRRHH ? (
              <>
                <div className={style.filters}>Modificar Novedades</div>
                <div className={style.filters}>Modificar Internos</div>
                <div className={style.filters}>Modificar Menu</div>
                <div className={style.filters}>Eliminar Novedad</div>

              </>
            ) : null}
            <div>
              <div className={style.filtersContainer}>
                <div className={style.filters} onClick={handleToggleAdm}>
                  Administracion
                </div>
                {toggleAdm ? (
                  <div className={style.filters}>Factura para orden</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
