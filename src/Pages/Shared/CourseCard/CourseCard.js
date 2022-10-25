import React from 'react';

const CourseCard = ({course}) => {
  const {details , imgUrl , lessons , price , rating , titel} = course
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{titel}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure><img src={imgUrl} alt="Shoes" /></figure>
      </div>
    );
};

export default CourseCard;