import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";
import Manu from "../Shared/CourseCard/Manu";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div class=" container mx-auto">
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div>
          <ul className="menu bg-base-100 w-56 p-2 rounded-box">
            {courses.map((course) => (
              <Manu course={course} key={course.id}></Manu>
            ))}
          </ul>
        </div>

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
