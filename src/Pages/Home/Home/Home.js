import React from "react";
import photo from '../../../assets/studying-at-college-PXJXKNV.png'

const Home = () => {
  return (
    <div className="hero min-h-screen bg-[#217342] container mx-auto m-12 rounded-3xl p-5 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="drop-shadow-2xl ">
          <img
            alt=""
            src={photo}
            className="max-w-sm w-full rounded-lg shadow-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] "
          />
        </div>
        <div className=" md:w-2/4" >
          <h1 className="text-3xl md:text-5xl font-bold ">
            Move Beyond The Limitations of E-Learning
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-outline   glass">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
