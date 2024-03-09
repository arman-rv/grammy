import { createBrowserRouter } from "react-router-dom";

import Landing from "../pages/landing";
import Menu from "../pages/menu";
import NotFound404 from "../pages/notFound404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);
