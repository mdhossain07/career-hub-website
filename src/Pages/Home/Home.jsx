import Banner from "../../components/Banner/Banner";
import FeaturedJobs from "../../components/Featured Jobs/FeaturedJobs";
import JobCategory from "../../components/Job Category/JobCategory";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <JobCategory />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
