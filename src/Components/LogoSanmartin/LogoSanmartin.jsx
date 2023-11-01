import Nombre from "../../assets/Nombre.png";
import Tuerca from "../../assets/Tuerca.png";
import styles from "../LogoSanmartin/LogoSanmartin.module.css";

export const LogoSanmartin = () => {
  return (
    <div className={styles.logo}>
      <img src={Tuerca} alt="" className={`${styles.tuerca} ${styles.spin}`}/>
      <img src={Nombre} alt="" className={styles.nombre}/>
    </div>
  );
};
