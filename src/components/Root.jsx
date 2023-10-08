import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout"
import React from 'react'
import Home from '../pages/home/Home';
import Login from '../pages/login/login';
import Register from '../pages/register/Register';
        
const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader : ()=> fetch('/service.json'),
        },
  
        {
          path: "/Login",
          element: <Login></Login>,
        },
        {
          path: "/Register",
          element: <Register></Register>,
        },
  
      ]
    },
  ]);
        
        export default router;
    
