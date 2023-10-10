import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout"
import React from 'react'
import Home from '../pages/home/Home';
import Login from '../pages/login/login';
import Register from '../pages/register/Register';
import ServiceDetail from '../components/serviceDetail/ServiceDetail'
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/error/ErrorPage";
import Contact from "../pages/contact/Contact";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import Blogs from "../pages/blog/Blogs";
import BlogLayout from "../pages/blog/BlogLayout";
        
const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader : ()=> fetch('/service.json'),
        },
        {
          path: "/Contact",
          element: <PrivateRoute><Contact></Contact></PrivateRoute>,
        },
        {
          path: "/Login",
          element: <Login></Login>,
        },
        {
          path: "/Register",
          element: <Register></Register>,
        },
        {
            path :"/service/:id",
            element : <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
            loader : ()=> fetch('/service.json'),
        },
        {
          path: "/WhyChooseUs",
          element: <WhyChooseUs></WhyChooseUs>,
         // loader : ()=> fetch('/whychoose.json'),
        },
        {
          path: "/Blogs",
          element: <BlogLayout></BlogLayout>,
          loader : ()=> fetch('/blog.json'),
         
        },
  
      ]
    },
  ]);
        
        export default router;
    
