import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/Layout";
import Error from "../pages/Error";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
