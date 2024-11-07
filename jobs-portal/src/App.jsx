import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'

const App = () => {
  return (
    <>
      {/* ---Navbar--- */}
      {/* import Navbar.jsx component, and paste Nav code in that file */}
      <Navbar />

      {/* ---Hero--- */}
      {/* set Hero component, then pass props to the child>Hero.jsx from parent>App.jsx */}
      <Hero title='Become a React Dev' subtitle='Find the React job that fits your skills and needs' />

      {/* ---Developers and Employers--- */}
      {/* Creating HomeCards as like above components */}
      <HomeCards />

      {/* ---Browse Jobs--- */}
      <JobListings />

      {/* ---View All Jobs--- */}
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a>
      </section>
    </>
  )
}

export default App
