export const Lista = ({ name, path, position }) => {
  console.log(position);
  return (
    <a className={position} href={path}>
      {name}
    </a>
  );
};
