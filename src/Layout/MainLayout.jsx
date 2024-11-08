import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <nav className="">
        <ul className=" flex justify-center items-center gap-7 py-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default MainLayout;
