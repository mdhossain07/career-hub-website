import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const jobDetails = useLoaderData();

  const matchedJobs = jobDetails.find((job) => job.id == idInt);
  console.log(matchedJobs);

  const handleApplyJobs = () => {
    saveJobApplication(idInt);
  };

  return (
    <div>
      <div className="bg-{bg}">
        <h2 className="text-2xl font-semibold">Job Details</h2>
      </div>

      <section className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1">
          <p>Job Description:{matchedJobs.job_description}</p>
          <p>Job Responsiblity: {matchedJobs.job_responsibility}</p>
          <p>
            Educational Requirements: {matchedJobs.educational_requirements}{" "}
          </p>
          <p>Experiences: {matchedJobs.experiences} </p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Job Detals</h2>
          <p>Salary</p>
          <p>Job Title</p>
          <h2>Contact Information</h2>
          <p>Phone: {matchedJobs.contact_information.phone} </p>
          <p>Email: {matchedJobs.contact_information.email} </p>
          <p>Address: {matchedJobs.contact_information.address} </p>
          <NavLink to="/appliedjobs">
            <button onClick={handleApplyJobs} className="btn btn-secondary">
              Apply Now
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
