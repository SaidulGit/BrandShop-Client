import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root/Root.jsx";
import ErrorPage from "../Root/ErrorPage.jsx";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import Register from "./Components/Register";
import MyCart from "./Components/MyCart";
import AuthProvider from "./Provider/AuthProvider";
import AllProduct from "./Product/AllProduct.jsx";
import DetailsProduct from "./Product/DetailsProduct.jsx";
import Updatecart from "./Components/Updatecart.jsx";
import Private from "./Components/private/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brand/:brand",
        loader: async ({ params }) => {
          try {
            const data = await fetch(
              `http://localhost:5000/brand/${params.brand}`
            );
            const result = await data.json();
            return result;
          } catch (error) {
            console.error("Error loading data", error);
          }
        },
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addproduct",
        element: <Private><AddProduct></AddProduct></Private>,
      },
      {
        path: "/registation",
        element: <Register></Register>,
      },
      {
        path: "/mycart",
        loader: () => fetch("http://localhost:5000/cartdata"),
        element: <Private><MyCart></MyCart></Private>,
      },
      {
        path: "/product/:name",
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/product/${params.name}`),
        element: <DetailsProduct></DetailsProduct>,
      },
      {
        path: "/update/:id",
        loader: () => fetch("http://localhost:5000/allproduct"),
        element: <Private><Updatecart></Updatecart></Private>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
