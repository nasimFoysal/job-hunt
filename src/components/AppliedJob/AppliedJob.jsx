import React from "react";
import "./AppliedJob.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const AppliedJob = ({ appliedJob }) => {
  const {
    id,
    jobTitle,
    companyName,
    address,
    salary,
    remoteOrOnsite,
    fulltimeOrParttime,
    companyLogo,
  } = appliedJob;
  return (
    <div className="card mb-3 mt-4 container">
      <div className="row g-0 py-3">
        <div className="col-md-3 my-auto">
          <div className="bg-light py-5 px-3 text-center">
            <img
              src={companyLogo}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title fw-bold">{jobTitle}</h5>
            <h5 className="card-title my-applied-color mb-3">{companyName}</h5>
            <button className="btn btn-outline-primary me-2">
              {remoteOrOnsite}
            </button>
            <button className="btn btn-outline-primary">
              {fulltimeOrParttime}
            </button>
            <div className="d-flex mt-3">
              <div className="d-flex me-2 my-applied-color">
                <div className="me-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <p className="card-text me-3">{address}</p>
              </div>
              <div className="d-flex my-applied-color">
                <div className="me-2">
                  <FontAwesomeIcon icon={faCircleDollarToSlot} />
                </div>
                <p className="card-text">Salary: {salary}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 my-auto">
          <Link to={`/jobDetails/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
