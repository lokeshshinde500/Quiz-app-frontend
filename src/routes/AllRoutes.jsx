import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import PrivateRoutes from "./PrivateRoutes";
import Quiz from "../components/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,

    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/home",
    element: (
      <PrivateRoutes>
        <Navbar />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":quizId/attempt",
        element: <Quiz />,
      },
    ],
  },
]);

export default function AllRoutes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
