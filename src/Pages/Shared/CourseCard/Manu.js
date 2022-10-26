import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

const Manu = ({ course }) => {
  return (
    <li className=" hover:text-green-700">
      <Link to={`/courses/${course.id}`}>{course.titel} <span className="text-1xl"><FaPlayCircle /></span></Link>
    </li>
  );
};

export default Manu;