import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Instructors.css";
import GreyCover from "../../GreyCover/GreyCover";
import { token } from "../../api/api";
import {fetchInstructors} from "../../api/api";
function Instructors() {
  const navigate = useNavigate();

  const {
    data: instructors,
    isLoading,
    error,
  } = useQuery("instructors", fetchInstructors);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <>
      <GreyCover
        title="Nos instructeurs"
        paragraph="Élever votre pratique avec des instructeurs de yoga passionnés et compétents!"
      />
      <div className="Instru-container">
        <div className="instru-profies-container">
          {instructors.map((instructor) => (
            <div className="instru-profiles" key={instructor.id}>
              <Link
                to={
                  token
                    ? `/user/instructors/${instructor.id}`
                    : `/explore/instructors/${instructor.id}`
                }
                onClick={() => {
                  if (!token) {
                    navigate(`/explore/instructors/${instructor.id}`);
                  }
                }}
              >
                <img src={instructor.img_url} alt={instructor.name} />
                <br />
                <p>{instructor.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Instructors;
