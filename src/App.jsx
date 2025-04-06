import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Ydelser from "./views/Ydelser";
import OmOs from "./views/OmOs";
import Kontakt from "./views/Kontakt";
import Bæredygtighed from "./views/Bæredygtighed";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/spira/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "ydelser", element: <Ydelser /> },
      {
        path: "omos",
        element: <OmOs />,
      },
      {
        path: "baeredygtighed",
        element: <Bæredygtighed />,
      },
      {
        path: "kontakt",
        element: <Kontakt />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
