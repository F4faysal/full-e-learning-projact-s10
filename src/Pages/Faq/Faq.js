import React from 'react';

const Faq = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col  items-center ">
       
        <div className="bg-green-500 w-full flex flex-col  items-center py-10">
          <h1 className="text-5xl text-white font-semibold ">
            4 questions & answers
          </h1>
        </div>
        <p className="text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 ">
          {" "}
          1 what is cors?
        </p>
        <p className="text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 "> </p>
        <p className="text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 ">
          {" "}
          2 Why are you using firebase? What other options do you have to
          implement authentication?
        </p>
        <p className="text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 "> </p>
        <p className="text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 ">
          {" "}
          3 How does the private route work?
        </p>
        <p className="text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 "> </p>
        <p className="text-2xl text-slate-500 font-semibold md:w-1/2 mt-7 ">
          {" "}
          4 What is Node? How does Node work?
        </p>
        <p className="text-1xl text-slate-500 font-semibold md:w-1/2 mt-4 "> </p>
      </div>
    );
};

export default Faq;