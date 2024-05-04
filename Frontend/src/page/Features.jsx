import React from 'react'
import jobtracker from '../assets/jobtracker.jpg'
import shortlink from '../assets/shortlink2.jpg'
import linkedin from '../assets/linkedin.jpg'

function Features() {
  return (
    <div className="flex min-h-screen items-center justify-center p-10 bg-white">
  <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
    <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
      <div className="h-1/2 flex-1">
        <img
          src={jobtracker}
          className=" object-cover object-right-top"
          alt="omnichannel"
        />
      </div>
      <div className="p-10">
        <h3 className="text-xl font-medium text-gray-700">
          Job Application Tracker
        </h3>
        <p className="mt-2 text-slate-500">
          TrackoJob lets you track all your job applications in one place. You
		  can add notes, set reminders, and see all your applications in one
		  place. You can also see the status of your applications and get
		  notified when the status changes.
        </p>
        <a href="" className="mt-2 inline-flex text-sky-500">
         	Check it out  →
        </a>
      </div>
    </div>
    <div className="flex rounded-md border border-slate-200">
      <div className="flex-1 p-10">
        <h3 className="text-xl font-medium text-gray-700">
          Short Link Generator
        </h3>
        <p className="mt-2 text-slate-500">
          TrackoJob lets you generate short links for your job applications. You
		  can use these links to share your applications with others. You can
		  also track the number of clicks on these links and see the location of
		  the people who clicked on the links.
        </p>
        <a href="" className="mt-2 inline-flex text-sky-500">
			Check it out  →
        </a>
      </div>
      <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
        <div className="absolute inset-0">
          <img
            src={shortlink}
            className="h-full w-full object-cover object-left-top"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="flex rounded-md border border-slate-200">
      <div className="flex-1 p-10">
        <h3 className="text-xl font-medium text-gray-700">
          Linkedin Referral Generator
        </h3>
        <p className="mt-2 text-slate-500">
          TrackoJob lets you generate customised Linkedin referral message for your job using the
		  power of AI. You can use these messages to ask for referrals from your connections on
		  Linkedin.
        </p>
        <a href="" className="mt-2 inline-flex text-sky-500">
			Check it out →
        </a>
      </div>
      <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
        <div className="absolute inset-0">
          <img
            src= {linkedin}
            className="h-full w-full object-cover object-left-top"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Features
