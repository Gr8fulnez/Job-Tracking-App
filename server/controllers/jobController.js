const createJob = async (req, res) => {
  res.send("createJob user");
};
const deleteJob = async (req, res) => {
  res.send("deleteJob user");
};
const getAllJobs = async (req, res) => {
  res.send("getAllJobs user");
};
const updateJob = async (req, res) => {
  res.send("updateJob user");
};
const showStats = async (req, res) => {
  res.send("showStats user");
};

export { createJob, deleteJob, updateJob, showStats, getAllJobs };