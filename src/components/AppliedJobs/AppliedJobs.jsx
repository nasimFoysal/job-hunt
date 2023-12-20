import React, { useState } from "react";
import "./AppliedJobs.css";
import { getStoredJobs } from "../../Utils/fakeDb";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import NotApplied from '../../../public/assets/notapplied.jpg'

const AppliedJobs = () => {
  const allJobs = useLoaderData();

  const [showAppliedJobs, setShowAppliedJobs] = useState(true);
  const [onSite, setOnsite] = useState(true);
  const [remote, setRemote] = useState(true);

  const storedJobs = getStoredJobs();
  const storedJobIds = Object.keys(storedJobs);

  let appliedJobs = allJobs.filter((job) => storedJobIds.includes(job.id));

  if (!showAppliedJobs && !remote) {
    appliedJobs = appliedJobs.filter((job) => job.remoteOrOnsite === "Onsite");
  } else if (!showAppliedJobs && !onSite) {
    appliedJobs = appliedJobs.filter((job) => job.remoteOrOnsite === "Remote");
  }

  const onSiteHandler = () => {
    setShowAppliedJobs(false);
    setRemote(false);
    setOnsite(true);
  };

  const remoteHandler = () => {
    setShowAppliedJobs(false);
    setOnsite(false);
    setRemote(true);
  };

  return (
    <div>
      <div className="text-center pt-4 job-title">
        <h3 className="fw-bold">Applied Jobs</h3>
      </div>
      <div className="my-filter-btn-container mt-4">
        <div className="d-flex justify-content-end">
          {storedJobIds.length !== 0 && (
            <button
              onClick={() => onSiteHandler()}
              className="btn btn-primary me-2"
            >
              Onsite
            </button>
          )}
          {storedJobIds.length !== 0 && (
            <button onClick={() => remoteHandler()} className="btn btn-primary">
              Remote
            </button>
          )}
        </div>
      </div>
      <div>
        {storedJobIds.length === 0 && (
          <div>
             <div className="fw-bolder fs-4 text-center text-warning mb-4">
              You Haven't Applied For Any Jobs Yet!!
            </div>
            <div className="img-container d-flex justify-content-center">
              <img src={NotApplied} alt="" className="img-fluid rounded" />
            </div>
          </div>
        )
        }
      </div>
      <div>
        {appliedJobs.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
