import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorPage from './pages/error-page'
import Cart from './pages/Cart'
import Invoices from './pages/Invoices'
import Customer from './pages/Customer'
import Statistic from './pages/Statistic'
import Register from './pages/auth/Register'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cart',
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/invoices',
    element: <Invoices />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/customer',
    element: <Customer />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/statistic',
    element: <Statistic />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
