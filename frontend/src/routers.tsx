import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { additionRoutes } from "./modules/addition/routers/addition.router";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...additionRoutes],
  },
]);

export default mainRouter;
