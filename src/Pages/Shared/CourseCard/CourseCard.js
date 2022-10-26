import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";


const CourseCard = ({ course }) => {
  const { imgUrl, lessons, price, rating, titel , id } = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl drop-shadow-2xl mt-4 mb-3">
      <div className="card-body">
        <h2 className="card-title font-bold">{titel}</h2>
        <div className="flex">
          <p className="font-semibold text-green-500 hover:text-green-800 flex items-center justify-center gap-2 border rounded-md ">  <span className="text-[20px]"><FaPlayCircle /></span> <Link to={`/courses/${id}`}>{lessons}</Link> </p>
          <p className="font-semibold text-red-500 text-[20px] mx-3">  {price}</p>
          <p className="mx-2 font-bold">{rating}</p>
        </div>
      </div>
      <figure className="p-5 ">
        <img className="rounded-lg drop-shadow-lg" src={imgUrl} alt="Shoes" />
      </figure>
    </div>
  );
};

export default CourseCard;
