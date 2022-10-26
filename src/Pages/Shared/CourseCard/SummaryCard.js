import React from "react";
import { useLoaderData } from "react-router-dom";

const SummaryCard = () => {
  const data = useLoaderData();
  const { id, name, details, imgUrl, lessons, price, rating, titel } = data;
  console.log("SummaryCard", data);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={imgUrl} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
