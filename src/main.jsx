import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import NotFound from "./Components/NotFound";
import Root from "./Root";
import About from "./Pages/About/About";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import AuthProvider from "./Provider/AuthProvider";
import ResetPassword from "./Pages/Login/ResetPassword";
import Profile from "./Pages/Profile/Profile";
import Contact from "./Pages/Contact/Contact";
import EditProfile from "./Pages/Profile/EditProfile";
import PrivateRoute from "./PrivatesRoute/PrivateRoute";


const url = 'https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => (fetch(url))
      },
      {
        path: '/products',
        element: <Products />,
        loader: async () => (fetch(url))
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
        loader: async ({ params }) => (fetch(`${url}/${params.id}`))
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path:'/resetPassword',
        element:<ResetPassword></ResetPassword>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/editProfile',
        element:<PrivateRoute><EditProfile></EditProfile></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);