import style from "./FacturaOrden.module.css";

export const Item = ({ name, valor }) => {
  return (
    <div className={style.inputWrapper}>
      <label>{name}</label> 
      <input type="text" defaultValue={valor} />
    </div>
  );
};
