import { Login } from "../../Components/Login/Login";
import { LogoSanmartin } from "../../Components/LogoSanmartin/LogoSanmartin";
import styles from "../loginPages/LoginPages.module.css";

export const LoginPages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.position}>
      <LogoSanmartin width={styles.logoLoginWidth} heigth={styles.logoLoginHeigth}/>
      </div>
      <div className={styles.positionLogin}>
        <Login />
      </div>
      <div className={styles.positionFooter}>
        <h4 className={styles.textoFooter}>Desarrollado por IT Sanmartin Argentina</h4>
      </div>
    </div>
  );
};
