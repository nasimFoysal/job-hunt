import React from "react";
import "./SingleJobCategory.css";

const SingleJobCategory = ({ jobCategory }) => {
  const { jobImage, jobTitle, numberOfJobs } = jobCategory;
  return (
    <div className="my-single-job-category rounded py-4 mt-3">
      <div>
        <img src={jobImage} alt="" />
      </div>
      <h6 className="mt-3 job-title">{jobTitle}</h6>
      <p className="job-num">{numberOfJobs} Jobs Available</p>
    </div>
  );
};

export default SingleJobCategory;
