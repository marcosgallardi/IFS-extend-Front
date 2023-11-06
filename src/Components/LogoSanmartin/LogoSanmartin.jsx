import Nombre from "../../assets/Nombre.png";
import Tuerca from "../../assets/Tuerca.png";
import styles from "../LogoSanmartin/LogoSanmartin.module.css";

export const LogoSanmartin = ({width,heigth}) => {
  return (
    <div className={styles.logo}>
      <img src={Tuerca} alt="" className={`${styles.tuerca} ${width} ${styles.spin}`}/>
      <img src={Nombre} alt="" className={`${styles.nombre} ${heigth}`}/>
    </div>
  );
};
