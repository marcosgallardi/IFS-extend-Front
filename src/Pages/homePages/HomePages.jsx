import { FacturaOrden } from "../../Components/FacturaOrden/FacturaOrden";
import { NavbarDashboard } from "../../Components/NavbarDashboard/NavbarDashboard";
import { Sidebar } from "../../Components/home/Sidebar";

export const HomePages = () => {
  return (
    <div>
      <Sidebar />
      <NavbarDashboard />
      <FacturaOrden />
    </div>
  );
};
