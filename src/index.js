import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  { path: "/", element: <Layout />, errorElement: <ErrorPage /> },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
