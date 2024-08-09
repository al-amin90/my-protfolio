import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main/Main.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Page/Home.jsx";
import AllProject from "./Page/AllProject.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/allProjects",
        element: <AllProject></AllProject>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
