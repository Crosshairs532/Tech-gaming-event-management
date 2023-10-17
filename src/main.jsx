import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import './index.css'
import AuthProvider from './AuthProvider/Authprovider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}>
      </RouterProvider>
    </AuthProvider>




  </React.StrictMode>,
)
