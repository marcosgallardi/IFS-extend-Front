import { useSelector } from "react-redux";
import { TablaOrden } from "../FacturaOrden/TablaOrden";
import style from "./FacturaOrden.module.css";

export const Orden = () => {
  let { orden } = useSelector((state) => state.orden);

  console.log(orden, "orden");
  let transformToArray = orden?.map((item) => {
    return Object.values(item);
  });

  return (
    <div>
   
        <TablaOrden data={transformToArray} />
      
    </div>
  );
};
