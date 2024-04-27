import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../utils/axiosClient";
import { endpoints } from "../utils/endpoint";

function Job() {
  const [jobs, setJobs] = useState([]);

  const handleGetJob = async () => {
    try {
      const response = await makeGetRequest(endpoints.job.get);
      return response.jobs;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      return [];
    }
  };
  useEffect(() => {
    const fetchJobs = async () => {
      const jobData = await handleGetJob();
      setJobs(jobData);
    };
    fetchJobs();
  }, []);

  return(
  <div>
      <h1 className= "text-center font-bold" >Your Applications</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.jobtype}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <p>{job.description}</p>
            <p>{job.deadline}</p>
            <p>{job.Status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Job;
