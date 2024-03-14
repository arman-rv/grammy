import { createBrowserRouter } from "react-router-dom";

import Landing from "../pages/landing";
import NotFound404 from "../pages/notFound404";
import MenuPage from "../pages/menuPage";

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
