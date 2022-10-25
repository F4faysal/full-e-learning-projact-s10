import React from "react";
import { Link } from "react-router-dom";

const Manu = ({course}) => {
  return (
      <li>
      <Link to={`/course/${course.id}`}>{course.titel}</Link>
      </li>
  );
};

export default Manu;
