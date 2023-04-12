import React from 'react';
import banner from '../../assets/All Images/banner.png'
const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center gap-8'>
            <div className='px-3'>
                <h2 className='text-[#1A1919] md:text-7xl text-4xl  font-bold'>One Step Closer To Your 
                <span className='textColor'> Dream Job</span></h2>
                <p className='px-2 my-6 text-lg font-normal text-[#757575;'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn_all'>Get Started</button>
            </div>
            <div className='h-full'>
                <img className='object-cover' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;