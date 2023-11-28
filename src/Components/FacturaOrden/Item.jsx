import React from "react";

export const Item = ({ name, valor }) => {
  return (
    <>
      <label>{name}</label>
      <input type="text" value={valor} />
    </>
  );
};
