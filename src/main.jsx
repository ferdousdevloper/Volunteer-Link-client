import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage404 from "./Pages/ErrorPage404/ErrorPage404";
import Home from "./Pages/Home/Home";
import FirebaseAuthProvider from "./FirebaseAuthProvider/FirebaseAuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Root from "./Root";
import NeedVolunteerPage from "./Pages/NeedVolunteerPage/NeedVolunteerPage";
import ViewDetail from "./Pages/ViewDetail/ViewDetail";
import AddVolunteer from "./Pages/AddVolunteer/AddVolunteer";
import MyPost from "./Pages/MyPost/MyPost";
import UpdatePost from "./components/UpdatePost/UpdatePost";
import BeVolunteer from "./components/BeVolunteer/BeVolunteer";
import PrivateDetails from "./PrivateRoute/PrivateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage404></ErrorPage404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/volunteers`),
      },
      {
        path: "/needVolunteer",
        element: <NeedVolunteerPage></NeedVolunteerPage>,
      },
      {
        path: "/viewDetail/:_id",
        element: (
          <PrivateDetails>
            <ViewDetail></ViewDetail>
          </PrivateDetails>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params._id}`),
      },
      {
        path: "/beVolunteer/:_id",
        element: <PrivateDetails>
          <BeVolunteer></BeVolunteer>
        </PrivateDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params._id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addVolunteer",
        element: (
          <PrivateDetails>
            <AddVolunteer></AddVolunteer>
          </PrivateDetails>
        ),
      },
      
      {
        path: "/myPost",
        element: <PrivateDetails>
          <MyPost></MyPost>
        </PrivateDetails>,
      },
      {
        path: "/updatePost/:_id",
        element: <PrivateDetails>
          <UpdatePost></UpdatePost>
        </PrivateDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params._id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </FirebaseAuthProvider>
  </React.StrictMode>
);
