import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route index element={<HomePage />} />
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
