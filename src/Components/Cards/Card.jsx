
export const Card = ({ image,size }) => {
  return (
    <>
      <img src={image} alt="imagen gripe" className={size} />
    </>
  );
};
