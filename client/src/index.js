import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorPage from './pages/error-page'
import Cart from './pages/Cart'
import Invoices from './pages/Invoices'
import Customer from './pages/Customer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/invoices',
    element: <Invoices />,
  },
  {
    path: '/customer',
    element: <Customer />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
