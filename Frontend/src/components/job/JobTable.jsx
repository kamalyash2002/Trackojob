import React, { useState } from "react";
import ViewJob from "./ViewJob";
import UpdateJob from "./UpdateJob";
import ConfirmDelete from "./ConfirmDelete";
import Button from "../button/Button";
import CreateJob from "./CreateJob";

function JobTable({ jobs, setJobs }) {
  // Selected job
  const [selectedJob, setSelectedJob] = useState(null);
  const [createVisible, setCreateVisible] = useState(false);

  // Pop up modal
  
  const [modalVisible, setModalVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  
  // handle to show and close the create modal
  const handleCreateClick = () => {
    setCreateVisible(true);
  };
  const closeCreateModal = () => {
    setCreateVisible(false);
  };

  const handleUpdateClick = (job) => {
    setSelectedJob(job);
    setUpdateVisible(true);
  };
  const closeUpdateModal = () => {
    setSelectedJob(null);
    setUpdateVisible(false);
  };

  const handleViewClick = (job) => {
    setSelectedJob(job);
    setModalVisible(true);
  };

  const closeViewModal = () => {
    setSelectedJob(null);
    setModalVisible(false);
  };

  const handleDeleteClick = (job) => {
    setSelectedJob(job);
    setDeleteVisible(true);
  };
  const closeDeleteModal = () => {
    setSelectedJob(null);
    setDeleteVisible(false);
  };
  return (
    <div>
      {modalVisible && selectedJob && (
        <ViewJob job={selectedJob} closeViewModal={closeViewModal} />
      )}
      {updateVisible && selectedJob && (
        <UpdateJob
          job={selectedJob}
          setJobs={setJobs}
          jobs={jobs}
          closeModal={closeUpdateModal}
        />
      )}
      {deleteVisible && selectedJob && (
        <ConfirmDelete
          job={selectedJob}
          setJobs={setJobs}
          jobs={jobs}
          closeModal={closeDeleteModal}
        />
      )}
      {createVisible && (
        <CreateJob
          jobs={jobs}
          setJobs={setJobs}
          closeModal={closeCreateModal}
        />
      )}
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
          <Button
            handleClick={ handleCreateClick }
          />
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Position</th>
                    <th className="py-3 px-6 text-left">Company</th>
                    <th className="py-3 px-6 text-center">Salary</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {jobs.map((job) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{job.title}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img
                              className="w-6 h-6 rounded-full"
                              src="https://randomuser.me/api/portraits/men/1.jpg"
                            />
                          </div>
                          <span>{job?.company}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span>{job.salary}</span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          {job.status}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              onClick={() => handleViewClick(job)}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              onClick={() => handleUpdateClick(job)}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              onClick={() => handleDeleteClick(job)}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobTable;
