import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div class="grid grid-rows-1 grid-flow-col gap-5 container mx-auto">
      <div class="row-span-1  ">01</div>
      <div class="col-span-2  ">
        <div className="grid grid-cols-1 md:grid-cols-2  justify-center">
          {courses.map((course) => (
            <CourseCard course={course} key={course.id}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
