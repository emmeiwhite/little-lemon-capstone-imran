import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BookingContextProvider } from './context'
import {
  BookingPage,
  ErrorPage,
  LandingPage,
  OnlineMenu,
  OverallLayout,
  ProtectedRoute,
  SuccessBooking
} from './pages/Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <OverallLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'booking',
        element: <BookingPage />
      },
      {
        path: 'success',
        element: (
          <ProtectedRoute>
            <SuccessBooking />
          </ProtectedRoute>
        )
      },
      {
        path: 'online-menu',
        element: <OnlineMenu />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BookingContextProvider>
      <RouterProvider router={router} />
    </BookingContextProvider>
  </React.StrictMode>
)
