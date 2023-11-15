import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Redux/actions/loginAction";
import styles from "../Login/Login.module.css";
import login1 from "../../assets/login1.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [inputLogin, setInputLogin] = useState({
    username: "",
    password: "",
    base: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogin = ({ target }) => {
    let { value, name } = target;
    setInputLogin({
      ...inputLogin,
      [name]: value,
    });
  };

  const { username, password, base } = inputLogin;

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const loginSuccess = await dispatch(loginAction(username, password, base));
    console.log(loginSuccess === true, "condicion!!");
    if (loginSuccess === true) {
      navigate("/home");
    } else {
      alert("password incorrecta");
    }
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

        <select name="base">
          <option disabled selected>
            Base
          </option>

          <option value="IFSARG1P">IFS Produccion</option>
          <option value="IFSARG1T">IFS Test</option>
        </select>

        <button className={styles.bottonLogin}>Entrar</button>
      </form>
    </div>
  );
};
