export const Lista = ({ name, path, position }) => {

  return (
    <a className={position} href={path}>
      {name}
    </a>
  );
};
