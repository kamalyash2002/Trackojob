import React,{useEffect, useState} from "react";
import {JobStatus} from "../../utils/constant";
import {makeGetRequest} from "../../utils/axiosClient";
import {endpoints} from "../../utils/endpoint";

function Metrics({jobs}) {
  console.log("This is Metrics Page");
  const [metrics, setMetrics] = useState([]);
  const handleGetMetrics = async () => {
    try {
      const response = await makeGetRequest(endpoints.job.metrics);
      return response.metrics;
    } catch (error) {
      console.error("Error fetching metrics:", error);
      return [];
    }
  }
  useEffect(() => {
    const fetchMetrics = async () => {
      const metricsData = await handleGetMetrics();
      setMetrics(metricsData);
    }
    fetchMetrics();
  },[jobs]);

  return (
    <div>
      <div className="bg-gray-100 py-24 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Application Status
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5">
              { Object.values(JobStatus).map((status) => (
                <div className="flex flex-col bg-indigo-100 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {status}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {metrics[status]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
