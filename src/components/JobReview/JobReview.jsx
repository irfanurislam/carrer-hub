import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faDollarSign  } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const JobReview = ({ applyjob}) => {

// distructuring apply job 

  const { image,id,job_title,brand,job_time,job_type,location,job_salary } = applyjob;
  return (
    <div className="px-8">
      
      <div className="w-full justify-between items-center shadow-lg md:flex p-3 md:p-5 rounded-lg mb-3 border border-gray-200">
         <div className="md:flex gap-5 items-center">
           <img src={image} alt="logo" className="w-32 h-32 object-contain" />
           <div>
            <h2 className="card-little pt-1 font-bold text-xl">{job_title}</h2>
            <p className="font-semibold py-2 text-lg text-[#757575]">{brand}</p>
           <div className="md:flex gap-4 my-4">
            <button className=" mb-3 btn btn-outline textColor hover:text-indigo-500 border border-indigo-400">{job_time}</button>
            <button className="btn btn-outline textColor hover:text-indigo-500 border border-indigo-400">{job_type}</button>
           </div>
         
         <div className="md:flex gap-6 mb-3">
            <p className="font-semibold text-[#757575] pt-3">
                <span className=""><FontAwesomeIcon className="mr-3" icon={faLocationArrow} /></span>
                {location}</p>
            <p className="font-semibold text-[#757575] pt-3">
                <span className=""><FontAwesomeIcon className="mr-3" icon={faDollarSign} /></span>
                {job_salary}</p>
         </div>
           </div>
         </div>
         
        <Link to={`/job/${id}`}> <button className="btn btn_all">Job details</button></Link>
      </div>
    </div>
  );
};

export default JobReview;
