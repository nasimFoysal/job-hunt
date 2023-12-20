import React from "react";
import "./FeaturedJobs.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const FeaturedJobs = ({ featuredJob }) => {
  const {
    jobTitle,
    companyName,
    address,
    salary,
    id,
    remoteOrOnsite,
    fulltimeOrParttime,
    companyLogo,
  } = featuredJob;
  return (
    <div className="border rounded m-2 p-4 my-featured-job">
      <div>
        <img src={companyLogo} alt="" />
      </div>
      <div className="mt-4">
        <h3 className="fw-bold">{jobTitle}</h3>
        <p className="my-grey-color fw-bold">{companyName}</p>
      </div>
      <div>
        <button className="btn btn-outline-primary me-3">
          {remoteOrOnsite}
        </button>
        <button className="btn btn-outline-primary">
          {fulltimeOrParttime}
        </button>
      </div>
      <div className="d-flex me-3 mb-3 mt-3">
        <div className="my-grey-color my-featured-font">
          <span className="me-2">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span>{address}</span>
        </div>
        <div className="my-grey-color ms-3">
          <span className="me-2">
            <FontAwesomeIcon icon={faCircleDollarToSlot} />
          </span>
          <span>{salary}</span>
        </div>
      </div>
      <Link to={`/jobDetails/${id}`}>
        <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
