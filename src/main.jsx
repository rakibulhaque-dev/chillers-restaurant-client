import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Banner from './Components/Banner/Banner';
import AuthProvider, { AuthContext } from './provider/AuthProvider';
import Chef from './Components/Chef/Chef';
import Recipe from './Components/Recipe/Recipe';
import PrivateRoute from './Components/routes/PrivateRoute';
import Favorites from './Components/Favorites/Favorites';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/recipe",
    element: <PrivateRoute><Recipe></Recipe></PrivateRoute>
  },
  {
    path: "/chef",
    element: <Chef></Chef>
  },
  {
    path: "/favorites",
    element:  <PrivateRoute><Favorites></Favorites></PrivateRoute>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
