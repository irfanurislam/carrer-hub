import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    //all home parts components 
    return (
        <div className='px-12'>
           <Banner></Banner>
           <JobCategory></JobCategory>
           <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;