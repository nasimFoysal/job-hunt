import React from "react";
import "./JobDetails.css";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../Utils/fakeDb";
// _____________
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleDollarToSlot,
  faCalendarDays,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const jobData = useLoaderData();
  let params = useParams();

  const thisJob = jobData.find((job) => job.id === params.jobId);

  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    contactInformation,
    address,
  } = thisJob;

  const handleApplyJob = (id) => {
    addToDb(id);
  };
  return (
    <div>
      <div className="text-center pt-4 job-title">
        <h3 className="fw-bold">Job Details</h3>
      </div>
      <div className="row job-details">
      <div className="col col-md-8">
        <p>
          <span className="fw-bold">Job Description: </span>
          <span className="my-details-color"> {jobDescription}</span>
        </p>
        <p>
          <span className="fw-bold">Job Responsibility: </span>
          <span className="my-details-color">{jobResponsibility}</span>
        </p>
        <p className="fw-bold">Educational Requirements:</p>
        <p className="my-details-color">{educationalRequirements}</p>
        <p className="fw-bold">Experience:</p>
        <p className="my-details-color">{experiences}</p>
      </div>
      <div className="col col-md-4">
        <div className="card card-container">
          <div className="card-body">
            <h5 className="card-title fw-bold">Job Details</h5>
            <hr />
            <div className="d-flex">
              <div className="me-2">
                <FontAwesomeIcon
                  icon={faCircleDollarToSlot}
                  className="icons"
                />
              </div>
              <p>
                <span className="fw-bold me-2">Salary:</span>
                <span className="my-details-color"> {salary}</span>
              </p>
            </div>
            <div className="d-flex mb-2">
              <div className="me-2">
                <FontAwesomeIcon icon={faCalendarDays} className="icons" />
              </div>
              <p>
                <span className="fw-bold me-2">Job Title:</span>
                <span className="my-details-color">{jobTitle}</span>
              </p>
            </div>
            <h5 className="card-title fw-bold mb-2 text-body-secondary">
              Contact Information
            </h5>
            <hr />
            <div className="d-flex mb-2">
              <div className="me-2">
                <FontAwesomeIcon icon={faPhone} className="icons" />
              </div>
              <p className="card-text">
                <span className="fw-bold  me-2">Phone:</span>
                <span className="my-details-color">
                  {contactInformation.phone}
                </span>
              </p>
            </div>
            <div className="d-flex mb-2">
              <div className="me-2">
                <FontAwesomeIcon icon={faEnvelope} className="icons" />
              </div>
              <p className="card-text">
                <span className="fw-bold me-2">Email:</span>
                <span className="my-details-color">
                  {contactInformation.email}
                </span>
              </p>
            </div>
            <div className="d-flex mb-2">
              <div className="me-2">
                <FontAwesomeIcon icon={faLocationDot} className="icons" />
              </div>
              <p>
                <span className="fw-bold me-2">Address:</span>
                <span className="my-details-color">{address}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => handleApplyJob(params.jobId)}
            className="btn btn-primary"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobDetails;
