import React from 'react';
import { PieChart, Pie, Tooltip } from "recharts";
const Statistics = () => {
 const assignments  = [
        {
          "id": 1,
          "name": "Md Irfanur Islam",
          "assignment_name": "Assignment 1",
          "marks": 57
        },
        {
          "id": 2,
          "name": "Md Irfanur Islam",
          "assignment_name": "Assignment 2",
          "marks": 59
        },
        {
          "id": 3,
          "name": "Md Irfanur Islam",
          "assignment_name": "Assignment 3",
          "marks": 60
        },
        {
          "id": 4,
          "name": "Md Irfanur Islam",
          "assignment_name": "Assignment 4",
          "marks": 60
        },
        {
          "id": 5,
          "name": "Md Irfanur Islam",
          "assignment_name": "Assignment 5",
          "marks": 37
        },
        {
          "id": 6,
          "name": "Md Irfanur Islam",
          "assignment_name": "Assignment 6",
          "marks": 60
        },
        {
          "id": 7,
          "name": "Md Irfanur Islam",
          "assignment_name": "Assignment 7",
          "marks": 60
        },
        {
          "id": 8,
          "name": "Md Irfanur Islam",
          "assignment_name": "Assignment 8",
          "marks": 60
        }
      ]
      
    return (
        <div className='py-28 flex items-center justify-center'>
           <PieChart width={500} height={600} >
      {/* <Pie
        data={assignments}
        dataKey="marks"
        cx={200}
        cy={200}
        outerRadius={150}
        innerRadius={50}
        label
        fill="#8884d8"
      />  */}
     
     <Pie
        data={assignments}
        dataKey="id"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
        
      />
      <Tooltip />
      <Pie
        data={assignments}
        dataKey="marks"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={120}
        fill="#82ca9d"
        label
      />

      
      {/* <Tooltip dataKey='name' /> */}
    
    </PieChart>
        </div>
    );
};

export default Statistics;