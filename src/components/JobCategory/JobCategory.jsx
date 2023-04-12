import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const JobCategory = () => {
    const [category,setCategory] = useState([])

//category loadt json


    useEffect(() =>{
        fetch('jobCategory.json')
        .then(res => res.json())
        .then(data => setCategory(data.jobCategories))
    },[])

    //  const categories = category.jobCategories
    //  console.log(categories)
    return (
        <div>
            <div className='text-center my-32'>
                <h2 className='text-[#1A1919] md:text-5xl text-2xl font-bold mb-4'>Job Category List</h2>
                <p className='text-base text-[#757575] mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                   {
                    
                     category.map((vacancy) => <SingleCategory
                     key={vacancy.id}
                     vacancy={vacancy}
                     ></SingleCategory>)
                    


                   }
                </div>
            </div>
        </div>
    );
};

export default JobCategory;