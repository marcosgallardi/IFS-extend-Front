import styles from "../Login/Login.module.css";
import login1 from "../../assets/login1.png";

export const Login = () => {
  return (
    <div className={styles.box}>
      <img src={login1} alt="" className={styles.loginform} />
      <form className={styles.positionInput}>
        <input
          type="text"
          className={styles.inputLogin}
          placeholder="Escribi tu usuario"
        />

        <input
          type="password"
          className={styles.inputLogin}
          placeholder="Escribi tu contraseña"
        />

        <button className={styles.bottonLogin}>Entrar</button>
      </form>
    </div>
  );
};
