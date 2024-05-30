import style from "./Card.module.css";

export const Card = ({ image, size }) => {
  return (
    <>
      <img
        src={image}
        alt="imagen gripe"
        className={`${size} ${style.tamañoImg}`}
      />
    </>
  );
};
