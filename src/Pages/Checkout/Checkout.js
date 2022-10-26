import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ref = React.createRef();

const Checkout = () => {
  const { user } = useContext(AuthContext);
  

  const clickEnroll = () => {
    
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-12 w-12 rounded-full"
                src={user.photoURL ? user.photoURL : imgUrl}
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Congratulations and best wishes for your next adventure!
              </p>
              <p className="mt-1 text-sm text-green-700">
                {titel} <span className="text-red-500">{price}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));



  };

  const heckoutData = useLoaderData();
  const { id, details, imgUrl, lessons, price, rating, titel } = heckoutData;
  const d = new Date();
  return (
    <div className="  h-screen">
      <div className=" md:w-1/2 md:p-5 p-2" ref={ref}>
        <h2 className="  font-bold text-3xl my-5 ">{titel}</h2>
        <p className="  text-lg font-bold"> Courses ID : {id}</p>
        <p className="  text-lg font-bold text-red-500"> Paid : {price}</p>
        <p className="  text-lg font-bold">
          {" "}
          Lessons : {lessons} , Rating : {rating}
        </p>
      </div>
      <div className="btn m-20">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf}>
              <label htmlFor="my-modal" className=" modal-button">
                Generate Pdf
              </label>
            </button>
          )}
        </Pdf>
      </div>

      <div>
        {/* The button to open modal */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations and best wishes for your next adventure!
            </h3>
            <p className="py-4 ">
              <img className="rounded-3xl" src={imgUrl} alt="" />
              
            </p>
            <p className="py-4   text-lg font-bold text-red-500">Paid : {price}</p>
            <div className="modal-action">
              
              <label htmlFor="my-modal" onClick={clickEnroll} className="btn">
               Enroll Sucess
              </label>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Checkout />, rootElement);

export default Checkout;
