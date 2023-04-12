import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faDollarSign } from '@fortawesome/free-solid-svg-icons';
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
          <div className="my-4">
            <button className="btn btn-outline mr-3 textColor hover:textColor border border-indigo-400">{job_time}</button>
            <button className="btn btn-outline textColor border border-indigo-400">{job_type}</button>
          </div>
          <div>
            <p className="text-[757575] text-xl"> <span><FontAwesomeIcon className ="mr-3" icon={faLocationArrow} /></span>{location} 
            <span className="ml-8"><FontAwesomeIcon className="mr-3" icon={faDollarSign} />{job_salary}</span></p>
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
