import { Menu } from "../../MenuLanding/Menu";
import style from "./ModMenu.module.css";

export const ModMenu = () => {
  return (
    <>
      <h2 className={style.positionTitleInt}>Modificar Menu</h2>
      <div className={style.positionModInt}>
        <div></div>
        <Menu size={style.sizeCardInt} showButtonChange={true} />
        <div></div>
      </div>
    </>
  );
};
