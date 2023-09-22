const getStroedJobApplication = () => {
  const appliedJobs = localStorage.getItem("job-id");
  if (appliedJobs) {
    return JSON.parse(appliedJobs);
  }
  return [];
};

const saveJobApplication = (id) => {
  const applyJobs = getStroedJobApplication();
  const isExist = applyJobs.find((jobId) => jobId === id);
  if (!isExist) {
    applyJobs.push(id);
    localStorage.setItem("job-id", JSON.stringify(applyJobs));
  }
};

export { getStroedJobApplication, saveJobApplication };
