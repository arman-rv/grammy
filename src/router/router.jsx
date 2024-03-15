import { createBrowserRouter } from "react-router-dom";

import Landing from "../pages/landing";
import MenuPage from "../pages/menu-page";
import NotFound404 from "../pages/not-found-404";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);
