import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './components/Root'
import {RouterProvider} from "react-router-dom";
import './index.css'
import AuthProvider from './providers/Authprovider';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
  <AuthProvider>
       
   <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </React.StrictMode>,
)
