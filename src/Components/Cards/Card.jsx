import style from "./Card.module.css";

export const Card = ({ image, size }) => {
  console.log(size)
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
