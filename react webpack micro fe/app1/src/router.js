import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import HomePage from "./homepage";
import UsersPage from "./userspage";
import App from "./app";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:'', element: <HomePage />},
        {
            
            path:'/users',
            element: <UsersPage />
        }
      ]
    },
    {
        path: "/users",
      },
  ]);
const Router=()=>{
    return(
        <RouterProvider
        router={router} />
    )
}
export default Router