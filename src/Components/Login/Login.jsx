import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/actions/loginAction";
import styles from "../Login/Login.module.css";
import login1 from "../../assets/login1.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const [inputLogin, setInputLogin] = useState({
    username: "",
    password: "",
    base: "",
  });

  const [selectedOption, setSelectedOption] = useState("IFSARG1T");

  const [isIncorrectLogin, setIsIncorrectLogin] = useState(false);

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

    if (loginSuccess === true) {
      navigate("/home");
    } else {
      setIsIncorrectLogin(true);
      Swal.fire({
        icon: "error",
        title: "Invalido",
        text: "Usuario o contraseña incorrecta",
        footer: "Si no recuerda algun dato contacte al administrador",
        confirmButtonColor: "#0c3e62",
      });
    }
  };

  useEffect(() => {
    setIsIncorrectLogin(false);
  }, [dispatch]);

  const onChangeBase = (e) => {
    setSelectedOption(e.target.value);
    setInputLogin({
      ...inputLogin,
      base: e.target.value,
    });
  };

  return (
    <div className={styles.box}>
      <div className={styles.loginform}>
        <img src={login1} alt="" className={styles.loginform} />
      </div>
      <form className={styles.positionInput} onSubmit={onSubmitLogin}>
        <input
          type="text"
          className={`${styles.inputLogin} ${
            isIncorrectLogin ? styles.inputInvalid : ""
          }`}
          placeholder="Escribi tu usuario"
          value={inputLogin.username}
          name="username"
          onChange={onClickLogin}
        />

        <input
          type="password"
          className={`${styles.inputLogin} ${
            isIncorrectLogin ? styles.inputInvalid : ""
          }`}
          placeholder="Escribi tu contraseña"
          value={inputLogin.password}
          name="password"
          onChange={onClickLogin}
        />

        <select name="base" value={selectedOption} onChange={onChangeBase}>
          <option disabled>Base</option>
          <option value="IFSARG1P">IFS Produccion</option>
          <option value="IFSARG1T">IFS Test</option>
        </select>

        <button className={styles.bottonLogin}>Entrar</button>
      </form>
    </div>
  );
};
