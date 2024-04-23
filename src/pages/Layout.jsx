import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Routes from "../routes/routes";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
