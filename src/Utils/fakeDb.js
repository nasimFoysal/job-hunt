// use local storage to manage Jobs data
const addToDb = (id) => {
  let appliedJobs = {};

  //get the applied Jobs from local storage
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }

  // add quantity
  const quantity = appliedJobs[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    appliedJobs[id] = newQuantity;
  } else {
    appliedJobs[id] = 1;
  }
  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

const getStoredJobs = () => {
  let appliedJobs = {};

  //get the applied Jobs from local storage
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  return appliedJobs;
};

const removeFromDb = (id) => {
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    const appliedJobs = JSON.parse(storedJobs);
    if (id in appliedJobs) {
      delete appliedJobs[id];
      localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
    }
  }
};

const deleteAppliedJobs = () => {
  localStorage.removeItem("applied-jobs");
};

export { addToDb, getStoredJobs, removeFromDb, deleteAppliedJobs };
