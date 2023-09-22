import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStroedJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobsApply, setJobsApply] = useState([]);
  const [displayData, setDisplaydData] = useState([]);

  console.log(displayData);

  useEffect(() => {
    const appliedJobsId = getStroedJobApplication();
    if (jobs.length) {
      const jobsApplied = jobs.filter((job) => appliedJobsId.includes(job.id));
      setJobsApply(jobsApplied);
      setDisplaydData(jobsApplied);
    }
  }, [jobs]);

  const hadnleFilterData = (filter) => {
    if (filter === "all") {
      setDisplaydData(jobsApply);
    } else if (filter === "remote") {
      const remoteJobs = jobsApply.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplaydData(remoteJobs);
    } else if (filter === "onsite") {
      const onSiteJobs = jobsApply.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplaydData(onSiteJobs);
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2>Applied Jobs: {jobsApply.length} </h2>
        <details className="dropdown mb-20 mt-10">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => hadnleFilterData("all")}>
              <a>All</a>
            </li>
            <li onClick={() => hadnleFilterData("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => hadnleFilterData("onsite")}>
              <a>On Site</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="">
        {displayData.map((job) => (
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
