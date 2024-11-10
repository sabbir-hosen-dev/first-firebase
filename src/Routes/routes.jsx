import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path : "/signup",
        element: <SignUp />
      }
    ],
    future: {
      v7_startTransition: true, // Enable the future flag here
    },
  },
]);

export default router;
