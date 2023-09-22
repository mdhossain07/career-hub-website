import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mt-16">
      <h2 className="text-2xl">Featured Jobs</h2>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {jobs.slice(0, dataLength).map((job) => (
          <div key={job.id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src={job.logo} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{job.job_title}</h2>
              <p>{job.company_name}</p>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">{job.job_type}</button>
                <button className="btn btn-primary">
                  {job.remote_or_onsite}
                </button>
              </div>
              <div className="flex">
                <p>{job.location}</p>
                <p>Salary: {job.salary}</p>
              </div>
              <div className="card-actions justify-start">
                <Link to={`/job/${job.id}`}>
                  <button className="btn btn-secondary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <div className="card-actions justify-center mt-5">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-secondary {dataLength === jobs.length && 'hidden'}"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
