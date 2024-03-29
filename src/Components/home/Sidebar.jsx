import { useEffect, useState } from "react";
import style from "./Sidebar.module.css";
import tuerca from "../../assets/Tuerca.png";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../Redux/slices/sideBarSlice";

export const Sidebar = ({ switcher, setRender }) => {
  const dispatch = useDispatch();

  const [toggleAdm, setToggleAdm] = useState(false);
  const [toggleRRHH, setToggleRRHH] = useState(false);

  let { isCollapse } = useSelector((state) => state.sidebar);
  let { role } = useSelector((state) => state.login);

  let RRHHRole = role[0]?.find((rrhh) => {
    return rrhh.ROLE === "AR_RRHH";
  });

  let conciliacionRole = role[0]?.find((conciliacion) => {
    return conciliacion.ROLE === "AR_CONCILIACION";
  });

  const handleToggleMenu = () => {
    dispatch(setSidebar(!isCollapse));
    switcher(!isCollapse);
  };

  const handleToggleAdm = () => {
    setToggleAdm(!toggleAdm);
  };

  const handleToggleRRHH = () => {
    setToggleRRHH(!toggleRRHH);
  };

  const handleRender = (name) => {
    setRender({
      modNov: false,
      modInternos: false,
      modMenu: false,
      elimNov: false,
      factOrden: false,
      [name]: true,
    });
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
            <hr className={style.divider} />
            {RRHHRole ? (
              <>
                <div className={style.filters} onClick={handleToggleRRHH}>
                  Recursos Humanos
                </div>
                {toggleRRHH ? (
                  <>
                    <div
                      className={style.subFilters}
                      onClick={() => handleRender("modNov")}>
                      Modificar Novedades
                    </div>
                    <div
                      className={style.subFilters}
                      onClick={() => handleRender("modInternos")}>
                      Modificar Internos
                    </div>
                    <div
                      className={style.subFilters}
                      onClick={() => handleRender("modMenu")}>
                      Modificar Menu
                    </div>
                    <div
                      className={style.subFilters}
                      onClick={() => handleRender("elimNov")}>
                      Eliminar Novedad
                    </div>
                  </>
                ) : null}
              </>
            ) : (
              <div className={style.filters1}>Recursos Humanos</div>
            )}
            <hr className={style.divider} />
            <div className={style.filtersContainer}>
              {conciliacionRole ? (
                <>
                  <div className={style.filters} onClick={handleToggleAdm}>
                    Administracion
                  </div>
                  {toggleAdm ? (
                    <div
                      className={style.subFilters}
                      onClick={() => handleRender("factOrden")}>
                      Factura para orden
                    </div>
                  ) : null}
                </>
              ) : (
                <div className={style.filters1}>Administracion</div>
              )}
              <hr className={style.divider} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
