import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStroedJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobsApply, setJobsApply] = useState([]);

  useEffect(() => {
    const appliedJobsId = getStroedJobApplication();
    if (jobs.length) {
      const jobsApplied = jobs.filter((job) => appliedJobsId.includes(job.id));
      console.log(jobsApplied);
      setJobsApply(jobsApplied);
    }
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <h2>Applied Jobs: {jobsApply.length} </h2>
        <details className="dropdown mb-20 mt-10">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Remote</a>
            </li>
            <li>
              <a>On Site</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="">
        {jobsApply.map((job) => (
          <div key={job.id} className="hero bg-base-200 mb-10 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
              <img src={job.logo} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h2 className="text-3xl font-bold">{job.job_title}</h2>
                <p className="py-6">{job.job_responsibility}</p>
                <button className="btn btn-primary justify-around">
                  {job.remote_or_onsite}
                </button>
                <button className="btn btn-primary">{job.job_type}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
