// Courses.jsx
import React from "react";
import { useQuery } from "react-query";
import CardCourse from "./CardCourse";
import "./Courses.css";
import { fetchInstructorCoursesData } from "../../../../api/api";

function Courses() {
  const { data, error, isLoading } = useQuery(
    "instructorCourses",
    fetchInstructorCoursesData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="big-container">
        <div className="instructor-courses-card-grid">
          {data.map((course) => (
            <CardCourse
              key={course.id}
              image={course.background_image}
              yogaType={course.discipline_name}
              yogaDuration={course.duration}
              yogaLevel={course.niveau}
              videoTitle={course.titre}
              ccVideoDescription={course.description}
              ccFeedsClientNumber={course.sells_number}
              ccFeedsViewsNumber={course.views_number}
              courseId={course.id} // Pass courseId prop
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
