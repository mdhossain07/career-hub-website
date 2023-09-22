import { useEffect } from "react";
import { useState } from "react";

const JobCategory = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center space-y-3">
        <h2 className="text-2xl">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-around gap-10">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="card card-compact w-full bg-base-100 shadow-xl"
          >
            <figure>
              <img src={job.logo} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{job.category_name}</h2>
              <p>{job.availability}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
