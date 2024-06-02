import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../utils/axiosClient";
import { endpoints } from "../utils/endpoint";
import JobTable from "../components/job/JobTable";
import Metrics from "../components/job/Metrics";


function Job() {
  console.log("This is Job Page");
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
  

  return (
    <>
      <Metrics jobs = {jobs} />
      < JobTable jobs={jobs} setJobs ={setJobs}  />
    </>
  );
}

export default Job;
