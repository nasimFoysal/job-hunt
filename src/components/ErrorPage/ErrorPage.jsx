import React from "react";
import { Link, useRouteError } from "react-router-dom";
import ErrorImg from "../../../public/assets/errorImage.jpg";
import "./ErrorPage.css";


const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <div className="text-center mt-3">
        <img src={ErrorImg} alt="" className="error-image" />
      </div>
      <div className="text-center mt-4 pb-5">
        <p className="fw-bolder text-danger">Error Message:</p>
        <h1 className="fw-bolder">{error.message}</h1>
        <Link to='/'>
        <button className="btn btn-primary">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
