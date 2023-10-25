import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from '../Root/Root.jsx';
import ErrorPage from '../Root/ErrorPage.jsx';
import Home from './Components/Home';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import Register from './Components/Register';
import MyCart from './Components/MyCart';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path: "/addproduct",
        element:<AddProduct></AddProduct>
      },
      {
        path: "/registation",
        element:<Register></Register>
      },
      {
        path: "/mycart",
        element:<MyCart></MyCart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
