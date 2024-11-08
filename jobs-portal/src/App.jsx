import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route index element={<h1>Show how route working</h1>} />
    )
  )

  return (
    <RouterProvider router={router} />
    // <>
    //   <Navbar />
    //   <Hero title='Become a React Dev' subtitle='Find the React job that fits your skills and needs' />
    //   <HomeCards />
    //   <JobListings />
    //   <ViewAllJobs />
    // </>
  )
}

export default App
