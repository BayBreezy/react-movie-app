import React from "react";
import ReactDOM from "react-dom/client";
//Import global css
import "./index.css";
// import router functiion
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { router } from "./routes";
import { ConfigContextProvider } from "./context/ConfigContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <ConfigContextProvider>
      <RouterProvider router={router} />
    </ConfigContextProvider>
  </React.StrictMode>
);
