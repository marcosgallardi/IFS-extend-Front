import { useEffect, useState } from "react";
import { FacturaOrden } from "../../Components/FacturaOrden/FacturaOrden";
import { NavbarDashboard } from "../../Components/NavbarDashboard/NavbarDashboard";
import { Sidebar } from "../../Components/home/Sidebar";
import { ModNovedades } from "../../Components/RecursosHumanos/ModNovedades/ModNovedades";
import { ModInternos } from "../../Components/RecursosHumanos/ModInternos/ModInternos";
import { ModMenu } from "../../Components/RecursosHumanos/ModMenu/ModMenu";
import { EliminarNov } from "../../Components/RecursosHumanos/EliminarNov/EliminarNov";
import { PlaceholderDashboard } from "../../Components/LoadingComponents/PlaceholderDashboard";
import { Loading } from "../../Components/LoadingComponents/Loading";
import { logoutUser } from "../../Helpers/logoutUser";
import { useLoading } from "../../hooks/useLoading";

export const HomePages = () => {
  let stateOfRender = {
    placeholder: true,
    modNov: false,
    modInternos: false,
    modMenu: false,
    elimNov: false,
    factOrden: false,
  };

  const [render, setRender] = useState(stateOfRender);

  const [closeSidebar, setCloseSidebar] = useState(false);

  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
          <Sidebar
            switcher={setCloseSidebar}
            setRender={setRender}
            render={render}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
            }}>
            <NavbarDashboard
              close={closeSidebar}
              factRender={render.factOrden}
            />
            {render.placeholder ? <PlaceholderDashboard /> : null}
            {render.factOrden ? <FacturaOrden /> : null}
            {render.modNov ? <ModNovedades /> : null}
            {render.modInternos ? <ModInternos /> : null}
            {render.modMenu ? <ModMenu /> : null}
            {render.elimNov ? <EliminarNov /> : null}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
