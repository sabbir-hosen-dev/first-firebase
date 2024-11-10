import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";

function MainLayout() {

  return (
    <div className="cotainer px-5">
      <Navber />
      <Outlet />
    </div>
  );
}

export default MainLayout;
