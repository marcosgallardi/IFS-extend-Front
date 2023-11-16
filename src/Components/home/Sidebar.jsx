import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import style from "./Sidebar.module.css";
import tuerca from "../../assets/Tuerca.png";

export const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const handleToggleMenu = () => {
    setIsCollapse(!isCollapse);
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
            <div className={style.filters}>Recursos Humanos</div>
            <div>
              <div className={style.filtersContainer}>
                <div className={style.filters}>Administracion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
