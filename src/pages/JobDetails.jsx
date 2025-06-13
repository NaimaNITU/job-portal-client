import React from "react";
import { useLoaderData, Link } from "react-router";
import {
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaBriefcase,
} from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Back to Home */}
      <div className="mb-4">
        <Link to="/" className="btn btn-outline btn-sm">
          ← Back to Home
        </Link>
      </div>

      {/* Banner */}
      <div className="rounded-xl overflow-hidden shadow">
        <img
          src="https://i.ibb.co/9hmFGhh/job-banner.jpg" // You can replace with your own
          alt="Job Banner"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Title and Apply Button */}
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
        <Link to={`/jobApply/${job._id}`}>
          <button className="btn btn-primary">Apply now</button>
        </Link>
      </div>

      {/* Employment Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-100 p-6 rounded-xl shadow">
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-sm">
            <FaBriefcase /> Job Type: {job.jobType}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaMoneyBill /> Salary: {job.salaryRange.min} -{" "}
            {job.salaryRange.max} {job.salaryRange.currency.toUpperCase()}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaClock /> Deadline: {job.applicationDeadline}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt /> Location: {job.location}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm">
            Company: <span className="font-semibold">{job.company}</span>
          </p>
          <p className="text-sm">HR: {job.hr_name}</p>
          <p className="text-sm">Email: {job.hr_email}</p>
          <img
            src={job.company_logo}
            alt="Company Logo"
            className="w-20 mt-2"
          />
        </div>
      </div>

      {/* Description */}
      <div className="bg-base-100 p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold">Job Description</h2>
        <p className="text-gray-700">{job.description}</p>

        <div>
          <h3 className="font-medium mt-4">Responsibilities</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {job.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium mt-4">Requirements</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
