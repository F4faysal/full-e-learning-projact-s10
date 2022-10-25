import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { details, imgUrl, lessons, price, rating, titel } = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl drop-shadow-2xl mt-4 mb-3">
      <div className="card-body">
        <h2 className="card-title">{titel}</h2>
        <div className="flex">
          <p><Link>{lessons}</Link> </p>
          <p>{price}</p>
          <p>{rating}</p>
        </div>
      </div>
      <figure className="p-5 ">
        <img className="rounded-lg" src={imgUrl} alt="Shoes" />
      </figure>
    </div>
  );
};

export default CourseCard;
