export const Card = ({ image, size }) => {
  console.log(image)
  return (
    <>
      <img src={image} alt="imagen gripe" className={size} />
    </>
  );
};
