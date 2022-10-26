import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";


const SummaryCard = () => {
  const data = useLoaderData();
  const { id, details, imgUrl, lessons, price, rating, titel } = data;
  
 

  return (
    <div>
      
      <div className="mockup-window border border-base-300 p-6 m-10">
        <div className="flex justify-center px-4 py-16 border-t border-base-300">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={imgUrl} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{titel}</h2>
              <p className="">{details.slice(0, 100)}</p>

              <ul className="steps steps-vertical">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose Course</li>
                <li className="step">Enroll</li>
                <li className="step">Receive Course</li>
              </ul>

              <div className="card-actions flex justify-end items-center ">
                <p className="font-semibold text-green-500  flex items-center justify-center gap-2  ">
                  {" "}
                  <span className="text-[20px]">
                    <FaPlayCircle />
                  </span>
                  {lessons}{" "}
                </p>
                <p className="font-semibold text-red-500 text-[20px] mx-3">
                  {" "}
                  {price}
                </p>
                <p className="mx-2 font-bold">{rating}</p>

                <Link to={`/courses/checkout/${id}`}>
                <label
                
                  className="btn modal-button"
                >
                  Enroll now
                </label>
                </Link>
                {/* <button onClick={clickEnroll} className="btn btn-primary">
                 {" "}
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="flex flex-col w-full">
              <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                {titel}
              </div>
              <div className="divider"></div>
              <div className="grid h-20 card bg-base-300 rounded-box place-items-center px-5">
                {details}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
