import { Link } from "react-router-dom";
import { Lista } from "./lista";
import styles from "./Navbar.module.css";
import { LogoSanmartin } from "../LogoSanmartin/LogoSanmartin";

export const Navbar = () => {
  return (
    <nav className={styles.containerNav}>
        <LogoSanmartin width={styles.logoNavbarWidth} heigth={styles.logoNavbarHeigth}/>
      <ul className={styles.positionUl}>
        <Lista name={"Comedor"} path={"Comedor"} />
        <Lista name={"Internos"} path={"Internos"} position={styles.positionList}/>
        <Lista name={"Novedades"} path={"Novedades"} position={styles.positionList}/>
      </ul>
        <Link className={styles.loginButtom}to={"login"}>Login</Link>
    </nav>
  );
};
