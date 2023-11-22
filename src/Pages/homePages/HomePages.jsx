import { useState } from "react";
import { FacturaOrden } from "../../Components/FacturaOrden/FacturaOrden";
import { NavbarDashboard } from "../../Components/NavbarDashboard/NavbarDashboard";
import { Sidebar } from "../../Components/home/Sidebar";
import { ModNovedades } from "../../Components/RecursosHumanos/ModNovedades/ModNovedades";
import { ModInternos } from "../../Components/RecursosHumanos/ModInternos/ModInternos";
import { ModMenu } from "../../Components/RecursosHumanos/ModMenu/ModMenu";
import { EliminarNov } from "../../Components/RecursosHumanos/EliminarNov/EliminarNov";

export const HomePages = () => {
  let stateOfRender = {
    modNov: true,
    modInternos: false,
    modMenu: false,
    elimNov: false,
    factOrden: false,
  };

  
  const [render, setRender] = useState(stateOfRender);
  
  console.log(render)
  const [closeSidebar, setCloseSidebar] = useState(false);

  return (
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
        <NavbarDashboard close={closeSidebar} />
        {render.factOrden ? <FacturaOrden close={closeSidebar} /> : null}
        {render.modNov ? <ModNovedades /> : null}
        {render.modInternos ? <ModInternos /> : null}
        {render.modMenu ? <ModMenu /> : null}
        {render.elimNov ? <EliminarNov /> : null}
      </div>
    </div>
  );
};
