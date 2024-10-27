import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import HeroCards from './Components/HeroCards';
import JobListings from './Components/JobListings';
import ViewAllJobs from './Components/ViewAllJobs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroCards/>
      <JobListings/>
      <ViewAllJobs/>
    </>
  )
}

export default App
