import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    company,
    company_logo,
    location,
    title,
    jobType,
    description,
    requirements,
    salaryRange,
  } = job;

  return (
    <>
      <div className="rounded-lg border p-5 shadow-sm hover:shadow-md transition bg-white">
        <div className="flex items-start gap-3 mb-3">
          <img
            src={company_logo}
            alt={company}
            className="w-12 h-12 rounded-md"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{company}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>

        <h2 className="font-bold text-lg text-gray-900 mb-2">{title}</h2>

        <p className="text-xs text-gray-500 mb-2">{jobType} • Just now</p>

        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {requirements.map((skill, index) => (
            <span key={index} className="bg-gray-100 text-xs px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-blue-600 font-semibold">
            {salaryRange.currency === "bdt" ? "৳" : "$"}
            {salaryRange.max.toLocaleString()}/Month
          </p>
          <Link
            to={`/jobDetails/${job._id}`}
            className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded hover:bg-blue-200"
          >
            Show Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobCard;
