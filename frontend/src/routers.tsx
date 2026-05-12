import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { multiplicationRoutes } from "./modules/multiplication/routers/multiplication.router";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...multiplicationRoutes],
  },
]);

export default mainRouter;
