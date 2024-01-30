import { Internos } from "../../InternosLanding/Internos";
import style from "../ModInternos/ModInternos.module.css";

export const ModInternos = () => {
  return (
    <div>
      <h2 className={style.positionTitleInt}>Modificar Internos</h2>
      <div className={style.positionModInt}>
        <div></div>

        <Internos size={style.sizeCardInt} showButtonChange={true} />
        <div></div>
      </div>
    </div>
  );
};
