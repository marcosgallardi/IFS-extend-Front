import { useSelector } from "react-redux";
import { TablaOrden } from "../FacturaOrden/TablaOrden";

export const Orden = () => {
  let { orden } = useSelector((state) => state.orden);

  let transformToArray = orden?.map((item) => {
    return Object.values(item);
  });

  return (
    <>
      <TablaOrden data={transformToArray} />
    </>
  );
};
