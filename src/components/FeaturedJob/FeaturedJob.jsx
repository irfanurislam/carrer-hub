import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const FeaturedJob = () => {
    const jobsAll = useLoaderData()
    
     const [jobs, setJobs] = useState([])

     
//see all jobs state set click button

console.log(jobs)
     useEffect(()=>{
      if(jobsAll.length > 5){
        const newBrands = jobsAll.slice(0,4)
        setJobs(newBrands)
      }
     },[]);




    return (
        <div className='my-32'>
           <div className='text-center'>
           <h2 className='text-[#1A1919] text-2xl md:text-5xl font-bold mb-4'>Featured Jobs</h2>
                <p className='text-base text-[#757575] mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
         <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 my-12'>
            {
             jobs.map(job => <Job
             key ={job.id}
             job ={job}
             ></Job>)
            }
         </div>
          
          <div className={`flex items-center justify-center ${jobs.length === 6 && 'hidden'}`}>
          <button onClick={() => setJobs(jobsAll)} className='btn btn_all text-lg text-center'>See All Jobs</button>
          </div>
        </div>
    );
};

export default FeaturedJob;