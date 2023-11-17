import styles from "./NavbarDashboard.module.css";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { IoIosExit } from "react-icons/io";
export const NavbarDashboard = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <PiMagnifyingGlassDuotone className={styles.icon} />
          <button className={styles.buttonLogout}>
            Salir{" "}
            <span>
              <IoIosExit className={styles.iconLogout}/>
            </span>{" "}
          </button>
        </ul>
      </nav>
    </div>
  );
};
