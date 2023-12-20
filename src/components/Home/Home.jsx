import React, { useEffect, useState } from "react";
import "./Home.css";

import { useLoaderData } from "react-router-dom";
import SingleJobCategory from "../SingleJobCategory/SingleJobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Banner from "../Banner/Banner";

const Home = () => {
  const [featuredJobData, setFeaturedJobData] = useState([]);
  const [seeAllJobs, setSeeAllJobs] = useState(false);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobData(data));
  }, []);
  const jobCategoryData = useLoaderData();

  const handleSeeAll = () => {
    setSeeAllJobs(true);
  };
  return (
    <div>
      {/* banner section */}
      <section>
        <Banner></Banner>
      </section>

      {/* job categories section */}
      <section className="text-center mt-5 mb-5">
        <h3 className="mb-3 my-font fw-bold">Job Category List</h3>
        <p className="mb-4 category-description">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div
          className="d-md-flex   align-items-center 
        justify-content-around 
        category-container mx-auto"
        >
          {jobCategoryData.map((jobCategory) => (
            <SingleJobCategory
              key={jobCategory.id}
              jobCategory={jobCategory}
            ></SingleJobCategory>
          ))}
        </div>
      </section>

      {/* featured jobs section */}
      <section className="mb-5">
        <div className="text-center">
          <h3 className="my-font fw-bold">Featured Jobs</h3>
          <p className="category-description">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="featured-container d-md-flex  flex-wrap justify-content-center mx-auto">
          {featuredJobData.slice(0, seeAllJobs ? 12 : 4).map((featuredJob) => (
            <FeaturedJobs
              key={featuredJob.id}
              featuredJob={featuredJob}
            ></FeaturedJobs>
          ))}
        </div>

        {!seeAllJobs && (
          <div className="text-center">
            <button onClick={handleSeeAll} className="btn btn-primary">
              See All Jobs
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
