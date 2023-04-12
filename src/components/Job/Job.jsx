import React from "react";
import {
  CurrencyDollarIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Job = ({ job,handleAddToCart }) => {
    const {id,image,brand,job_title,job_type,job_time,job_salary,location} = job
  console.log(job);
  return (
    <div className="my-8">
      <div className="card bg-base-100 shadow-xl border border-red-500">
        <div className="px-8 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title mt-4 text-2xl text-[#474747]">{job_title}</h2>
          <p className="text-xl text-[#757575] mt-2">{brand}</p>
          <div className="my-4 ">
            <button className="btn btn-outline mr-3 mb-3 textColor hover:text-indigo-500  border border-indigo-400">{job_time}</button>
            <button className="btn btn-outline textColor hover:text-indigo-500 border border-indigo-400">{job_type}</button>
          </div>
          <div className="">
           <p className="text-[757575] text-xl md:flex ">
           <span><MapPinIcon className="h-6 w-6" /></span>
           <span className="">{location}</span>
           <br /> 

          <span className="ml-8">
          <CurrencyDollarIcon className="h-6 w-6" /></span>
           <span> {job_salary}</span>
            
            </p>
          </div>
          <div className="card-actions mt-6">
           <Link to={`/job/${id}`}>
             <button  className="btn btn_all">job details</button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
