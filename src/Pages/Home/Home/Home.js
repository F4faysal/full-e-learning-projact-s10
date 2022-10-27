import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import photo from "../../../assets/studying-at-college-PXJXKNV.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Home = () => {
  const {user} = useContext(AuthContext);



  return (
    <div className="">
      <div className="hero min-h-screen bg-[#217342] container mx-auto m-12 rounded-3xl p-5 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="drop-shadow-2xl ">
            <img
              alt=""
              src={photo}
              className="max-w-sm w-full rounded-lg shadow-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] "
            />
          </div>
          <div className=" md:w-2/4">
            <h1 className="text-3xl md:text-5xl font-bold ">
              Move Beyond The Limitations of E-Learning
            </h1>
            <p className="py-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <Link to={`${user? '/courses' : '/login'}`} className="btn btn-outline glass">Get Started</Link>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center items-center container mx-auto mb-4">
        <div className="hero h-auto bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row-reverse p-10">
            <div className="hidden md:block">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Downloads</div>
                  <div className="stat-value">31K</div>
                  <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">New Users</div>
                  <div className="stat-value">4,200</div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">New Registers</div>
                  <div className="stat-value">1,200</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
              {/*  */}
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="title text-green-600">Course</h2>
                  <h1 className="text-3xl text-black font-bold">
                    Our Most Popular Course
                  </h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                  <div className="card-actions justify-start">
                    <Link to={`${user? '/courses' : '/login'}`} className="px-5 py-3 bg-orange-400 text-white rounded-md font-semibold hover:bg-orange-700">View More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
