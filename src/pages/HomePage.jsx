import Hero from "../Components/Hero";
import HeroCards from "../Components/HeroCards";
import JobListings from "../Components/JobListings";
import ViewAllJobs from "../Components/ViewAllJobs"
const HomePage = () => {
  return (
    <>
      <Hero/>
      <HeroCards/>
      <JobListings isHome={true}/>
      <ViewAllJobs/>
    </>
  )
}

export default HomePage
