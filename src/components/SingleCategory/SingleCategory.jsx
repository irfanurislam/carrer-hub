import React from "react";

const SingleCategory = ({ vacancy }) => {
  const {icon, name, vacancyAvailable } = vacancy;
  console.log(vacancy);
  return (
    <div>
      <div className="card min-h-full bg-base-100 shadow-xl border">
        <figure className="px-10 pt-10">
          <img src={icon} alt='' className="rounded-xl md:mr-auto" />
        </figure>
        <div className="card-body md:text-start ">
          <h4 className="text-lg text-[#474747] ">{name}</h4>
          <p className="text-[#A3A3A3] text-base">
            {vacancyAvailable} vacancy Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
