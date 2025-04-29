import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Ydelser from "./views/Ydelser";
import OmOs from "./views/OmOs";
import Kontakt from "./views/Kontakt";
import Baeredygtighed from "./views/Baeredygtighed";
import Home from "./views/Home";

const router = createBrowserRouter([ 
  { 
    path: "/",
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
        element: <Baeredygtighed />,
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

// Fortæller hvilke sider der skal vises på hjemmesiden