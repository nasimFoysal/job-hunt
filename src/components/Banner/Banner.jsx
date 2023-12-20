import React from 'react';
import './Banner.css';
import headerImage from "/assets/header-img.png";

const Banner = () => {
    return (
        <div className="d-md-flex align-items-center my-banner-container">
        <div className="my-title-container">
          <h1 className="header-title">
            One Step <br></br> Closer To Your <br></br> <span className='dream'>Dream Job</span>
          </h1>
          <p className="banner-description">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="my-img-container">
          <img className="img-fluid" src={headerImage} alt="" />
        </div>
        </div>
    );
};

export default Banner;