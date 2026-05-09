import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

export default mainRouter;
