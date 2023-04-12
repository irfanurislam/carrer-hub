import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobReview from "../JobReview/JobReview";

const AppliedJobs = () => {
  // 1st state

  // 2no state
  const cart = useLoaderData();
  const [items, setItems] = useState(cart);
  
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    // Filter items based on filter state
    const filtered = filter ? items.filter(item => item.job_type === filter) : items;
    setFilteredItems(filtered);
  }, [items, filter]);
  
  const handleFilterClick = (job_type) => {
    setFilter(job_type);
  };
  


  return (
    <div className="px-12">
      
      <h2 className="my-28 text-center text-[#1A1919] text-3xl font-bold">
        Applied Jobs
      </h2>

      <div className="px-10 md:flex justify-end items-end gap-2 my-4">
        <button
          onClick={() => handleFilterClick("Remote")}
          className="btn mb-3 textColor text-xs md:text-base border border-indigo-300"
        >
          Show Remote Jobs
        </button>
        <button
          onClick={() => handleFilterClick("Onsite")}
          className="btn mb-3 textColor text-xs md:text-base border border-indigo-300"
        >
          Show Onsite jobs
        </button>
      </div>
      <div className="">
        {filteredItems.map((applyjob) => (
          <JobReview key={applyjob.id} applyjob={applyjob}></JobReview>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
