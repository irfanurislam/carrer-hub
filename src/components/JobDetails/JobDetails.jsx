import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import toast from 'react-hot-toast';




const JobDetails = () => {
  const [details, setDetails] = useState([]);
  const data = useLoaderData();
  const { id } = useParams();
  // const dynamicId = parseInt(id);
  const dynamicId = id;

  useEffect(() => {
    let match;
    if (data) {
      match = data.find((dt) => dt.id === dynamicId);
    }
    setDetails(match);
  }, [setDetails]);


  // local storage

  const [cart, setCart] = useState([])

  useEffect( () =>{
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for(const id in storedCart){
        // step 2: get product from products state by using id
        const addedProduct = data.find(product => product.id === id)
        if(addedProduct){
            // step 3: add quantity
            const quantity = storedCart[id];
            addedProduct.brand = quantity;
            // step 4: add the added product to the saved cart
            savedCart.push(addedProduct);
        }
        // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
}, [data])


  const handleAddToCart = (product) => {
    // cart.push(product); '
    let newCart = [];
   
    const exists = cart.find(pd => pd.id === product.id);
    if(!exists){
        // product.brand = 1;
        newCart= [...cart, product]
    }
    else{
        toast ('already exist')
    }

    setCart(newCart);
    addToDb(product.id)
}


  const {
    description,
    responsibility,
    education,
    experience,
    job_title,
    job_type,
    job_time,
    job_salary,
    location,
    email,
    Phone
  } = details;
  return (
    <div className="px-14">
      <h2 className="my-28 text-center text-[#1A1919] text-3xl font-bold">
        Job details
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className=" col-span-2 ">
          <p className="text-base mb-6">
            <span className="text-[#1A1919] font-extrabold">
              Job description:
            </span>
            <span className=" ml-3 font-medium text-[#757575]">
              {description}
            </span>
          </p>

          <p className="text-base mb-6">
            <span className="text-[#1A1919] font-extrabold">
              Job Responsibility:
            </span>
            <span className="ml-3 font-medium text-[#757575]">
              {responsibility}
            </span>
          </p>

          <h2 className="text-[#1A1919] font-extrabold mb-4">
            Education Requirement
          </h2>
          <p className="font-medium text-[#757575] mb-6">{education}</p>
          <h2 className="text-[#1A1919] font-extrabold mb-4">JOb Experience</h2>
          <p className="font-medium text-[#757575]">{experience}</p>
        </div>

        {/* another cart part */}





        <div className="p-4 border bg-[#9873FF1A] rounded-md">
          <h2 className="text-xl text-[#1A1919] font-bold">Job details:</h2>
          <hr className="mt-4 " />
          <div className="my-6">
            <p className="text-xl text-[#474747] cart_info">
              <CurrencyDollarIcon className="h-6 w-6" />
              Salary : {job_salary} (PerMonth)
            </p>
            <br />
            <p className="text-xl text-[#474747] cart_info">
              <CalendarDaysIcon className="h-6 w-6" />
              Job Title : {job_title}
            </p>
          </div>
          <h2 className="text-xl text-[#1A1919] font-bold">
            Contact Information :
          </h2>
          <div className="my-6">
            <p className="text-xl text-[#474747] cart_info">
              <span>
                <PhoneIcon className="h-6 w-6 " />
              </span>
              <span>Phone : {Phone}</span>
            </p>
            <br />
            <p className="text-xl text-[#474747] cart_info">
              <BriefcaseIcon className="h-6 w-6 " /> 
              Email : {email}</p>
            <br />
            <p className="text-xl text-[#474747] cart_info">
            <MapPinIcon className="h-6 w-6 " />
              Address : {location}</p>
            <br />
          </div>
          <button onClick={() => handleAddToCart(details)} className="btn btn_all text-xl font-normal w-full">
            
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
