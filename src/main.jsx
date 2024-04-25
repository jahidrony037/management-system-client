import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <MainLayout />
  </RouterProvider>
);
