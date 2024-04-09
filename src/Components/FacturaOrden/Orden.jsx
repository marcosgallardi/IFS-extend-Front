import { TablaOrden } from "../FacturaOrden/TablaOrden";

export const Orden = ({ orden }) => {
  let transformToArray = orden?.map((item) => {
    return Object.values(item);
  });

  return (
    <>
      <TablaOrden data={transformToArray} />
    </>
  );
};
