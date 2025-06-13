import React, { use } from "react";
import JobCard from "../../shared/JobCard";

const HotJobs = ({ jobsData }) => {
  const jobs = use(jobsData); // Will throw if jobsData isn't a Promise
  //   console.log(jobs);
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mt-18">
        Jobs of the day
      </h1>
      <p className="text-center">
        Search and connect with the right candidates faster.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 py-10">
        {jobs.map((job) => (
          <JobCard job={job} key={job._id}></JobCard>
        ))}
      </div>
    </>
  );
};

export default HotJobs;
