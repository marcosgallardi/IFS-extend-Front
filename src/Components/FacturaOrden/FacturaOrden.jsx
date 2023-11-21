import React, { useState } from "react";
import style from "./FacturaOrden.module.css";

export const FacturaOrden = ({ onClose }) => {
  const [resizing, setResizing] = useState(false);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);

  const onMouseMove = (e) => {
    if (resizing) {
      setWidth(e.clientX + e.currentTarget.getBoundingClientRect().left);
      setHeight(e.clientY + e.currentTarget.getBoundingClientRect().top);
    }
  };

  const onMouseUp = () => {
    setResizing(false);
  };

  return (
    <div
      className={style.emergente}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}>
      <div
        className={style.handle}
        onMouseDown={() => setResizing(true)}
        style={{ cursor: resizing ? "nwse-resize" : "auto" }}
      />
      <div className="contenido">
        {/* Contenido de la ventana emergente */}
        <h2>Contenido de la Ventana Emergente</h2>
        <button onClick={onClose}>Cerrar Ventana</button>
      </div>
      
    </div>
  );
};
