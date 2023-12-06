import { useSelector } from "react-redux";
import {TablaOrden} from "../FacturaOrden/TablaOrden"
import style from "./FacturaOrden.module.css";

export const Orden = () => {
  let { isCollapse } = useSelector((state) => state.sidebar);
  let { orden } = useSelector((state) => state.orden);
  return (
    <div className={style.containerFactura2}>
    {
      isCollapse ? (<h2>
        Orden
      </h2>):
      <h2>
       <TablaOrden data={orden}/>
      </h2>

    }
    </div>
  )
};
