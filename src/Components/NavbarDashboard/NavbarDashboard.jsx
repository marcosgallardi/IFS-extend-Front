import styles from "./NavbarDashboard.module.css";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { IoIosExit } from "react-icons/io";
export const NavbarDashboard = ({ close }) => {
 
  return (
    <div>
      <nav className={`${close? styles.navbar2 : styles.navbar}`}>
        <ul>
          <PiMagnifyingGlassDuotone className={!close?styles.icon : styles.icon2} />
          <button className={styles.buttonLogout}>
            Salir{" "}
            <span>
              <IoIosExit className={styles.iconLogout} />
            </span>{" "}
          </button>
        </ul>
      </nav>
    </div>
  );
};
