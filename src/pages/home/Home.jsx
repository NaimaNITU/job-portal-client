import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

// Fetch data outside the component
const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      <Banner />
      <HotJobs jobsData={jobsPromise} />
    </div>
  );
};

export default Home;
