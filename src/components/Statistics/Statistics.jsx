import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
const Statistics = () => {

  //pie charts assignment ways
 const assignments  = [
        {
          "id": 1,
          
          "name": "Assignment 1",
          "marks": 57
        },
        {
          "id": 2,
          
          "name": "Assignment 2",
          "marks": 59
        },
        {
          "id": 3,
          
          "name": "Assignment 3",
          "marks": 60
        },
        {
          "id": 4,
          
          "name": "Assignment 4",
          "marks": 60
        },
        {
          "id": 5,
          
          "name": "Assignment 5",
          "marks": 37
        },
        {
          "id": 6,
          
          "name": "Assignment 6",
          "marks": 60
        },
        {
          "id": 7,
          "name": "Assignment 7",
          "marks": 60
        },
        {
          "id": 8,
          "name": "Assignment 8",
          "marks": 60
        }
      ]
      
    return (
      
        <div className='py-28 flex items-center justify-center'>
         
           <PieChart width={500} height={600} >
     
     <Pie
        data={assignments}
        dataKey="id"
        cx='50%'
        cy='50%'
        outerRadius={60}
        fill="#8884d8"
        
      />
      
      <Pie
        data={assignments}
        dataKey="marks"
        cx='50%'
        cy='50%'
        innerRadius={70}
        outerRadius={120}
        fill="#82ca9d"
        label
      />
      <Tooltip   />

      
     
    
    </PieChart>
    
        </div>
  
    );
};

export default Statistics;