import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";
import Manu from "../Shared/CourseCard/Manu";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div class=" container mx-auto">
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        {/* laft site card */}
        <div className="hidden md:block mt-12 ">
          <ul className=" menu bg-base-100 w-72 rounded-box ">
          <h2 className="  card-title py-3 px-4 border rounded-lg bg-green-600 text-white">Total courses {courses.length} </h2>
            {courses.map((course) => (
              <Manu course={course} key={course.id}></Manu>
            ))}
          </ul>
        </div>
        {/* MAIN  card */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-9">
          {courses.map((course) => (
            <CourseCard course={course} key={course.id}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
