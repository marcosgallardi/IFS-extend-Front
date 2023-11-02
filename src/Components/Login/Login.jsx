import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Redux/actions/loginAction";
import styles from "../Login/Login.module.css";
import login1 from "../../assets/login1.png";

export const Login = () => {
  const [inputLogin, setInputLogin] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const onClickLogin = ({ target }) => {
    let { value, name } = target;
    setInputLogin({
      ...inputLogin,
      [name]: value,
    });
  };
  console.log(inputLogin);

  const {username,password} = inputLogin

  const onSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(loginAction(username,password));
  };

  return (
    <div className={styles.box}>
      <img src={login1} alt="" className={styles.loginform} />
      <form className={styles.positionInput} onSubmit={onSubmitLogin}>
        <input
          type="text"
          className={styles.inputLogin}
          placeholder="Escribi tu usuario"
          value={inputLogin.username}
          name="username"
          onChange={onClickLogin}
        />

        <input
          type="password"
          className={styles.inputLogin}
          placeholder="Escribi tu contraseña"
          value={inputLogin.password}
          name="password"
          onChange={onClickLogin}
        />

        <button className={styles.bottonLogin}>Entrar</button>
      </form>
    </div>
  );
};
