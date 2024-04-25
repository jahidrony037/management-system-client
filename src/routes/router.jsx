import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AddUser from "../pages/AddUser";
import Home from "../pages/Home";
import UpdateUser from "../pages/UpdateUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(`https://management-system-server-five.vercel.app/users`),
      },
      {
        path: "/addUser",
        element: <AddUser />,
      },
      {
        path: "/update/:id",
        element: <UpdateUser />,
        loader: (params) =>
          fetch(
            `https://management-system-server-five.vercel.app/users/${params.params.id}`
          ),
      },
    ],
  },
]);
