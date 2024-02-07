import tuerca from "../../assets/Tuerca.png";
import style from "./PlaceholderDashboard.module.css";

export const Loading = () => {
  return (
    <>
      <div className={style.containerLoading}>
        <img
          src={tuerca}
          alt=""
          className={`${style.imageLoading} ${style.spin}`}
        />
      </div>
      <p className={style.textLoading}>
        Cargando <span className={style.span}>.</span>
        <span className={style.span1}>.</span>
        <span className={style.span2}>.</span>
      </p>
    </>
  );
};
