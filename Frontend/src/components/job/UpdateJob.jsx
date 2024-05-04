import React, {useState} from 'react'
import { makePatchRequest } from '../../utils/axiosClient'
import { endpoints } from '../../utils/endpoint'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateJob({job , setJobs,jobs, closeModal}) {
    const[title, setTitle] = useState(job.title);
    const[company, setCompany] = useState(job.company);
    const[salary, setSalary] = useState(job.salary);
    const[description, setDescription] = useState(job.description);
    const[deadline, setDeadline] = useState(job.deadline);
    const[status, setStatus] = useState(job.status);
    const[location, setLocation] = useState(job.location);
    const[jobtype, setJobtype] = useState(job.jobtype);


    const handleUpdate = async () => {
        try {
            const response = await makePatchRequest(endpoints.job.update(job._id), {
                title,
                company,
                salary,
                description,
                deadline,
                status,
                location,
                jobtype
            });
            // update the job in the jobs state
            if(response.job){
                const updatedJobs = jobs.map((job) => {
                    if(job._id === response.job._id){
                        return response.job;
                    }
                    return job;
                });
                setJobs(updatedJobs);
            }
            else{
                console.error("Error updating job:", response);
                toast.error("Error updating job");
            }
            toast.success("Job updated successfully");
        } catch (error) {
            console.error("Error updating job:", error);
        }
    }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Update Job Details
                </h3>
                <div className="mt-2">
                  
                  <label htmlFor="salary" className="text-sm text-gray-700">
                    Title:
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                   <label htmlFor="salary" className="text-sm text-gray-700">
                    Company :
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    value = {company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                   <label htmlFor="salary" className="text-sm text-gray-700">
                    Job Type:
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    value = {jobtype}
                    onChange={(e) => setJobtype(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                   <label htmlFor="salary" className="text-sm text-gray-700">
                    Location:
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    value = {location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                   <label htmlFor="salary" className="text-sm text-gray-700">
                    Salary:
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    value = {salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                   <label htmlFor="salary" className="text-sm text-gray-700">
                    Description:
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    value = {description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <label htmlFor="salary" className="text-sm text-gray-700">
                    Deadline :
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    value = {deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <label htmlFor="salary" className="text-sm text-gray-700">
                    Status:
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    value = {status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
    
                  {/* You can add more fields for updating job details */}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
              onClick={handleUpdate}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Update
            </button>
            <button
              onClick={closeModal}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
            
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default UpdateJob
