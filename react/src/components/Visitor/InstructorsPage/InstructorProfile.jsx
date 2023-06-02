import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import {
  FiFacebook,
  FaFacebookF,
  AiFillInstagram,
  AiOutlineInstagram,
  TfiTwitterAlt,
  TfiTwitter,
} from "react-icons/all";
import "./InstructorProfile.css";

const InstructorProfile = () => {
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const bgOverlayRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/instructors"
        );
        const instructors = response.data.instructors;
        const foundInstructor = instructors.find(
          (instructor) => instructor.id === parseInt(id)
        );

        if (foundInstructor) {
          setInstructor(foundInstructor);
        } else {
          console.log("Instructor not found");
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  return (
    <div className="profiles-container">
      <div className="profiles-background-image">
        <img
          src={instructor.background_img}
          className="profiles-background-image"
        />
        <div className="bg-overlay" ref={bgOverlayRef}></div>
        <div className="profiles-name">
          <h2>{instructor.name}</h2>
          <div className="social-link-container">
            <a className="social-links" href="">
              <FiFacebook className="social-icon" />
              <FaFacebookF className="social-icon-hover" />
            </a>
            <a className="social-links" href="">
              <AiOutlineInstagram className="social-icon" />
              <AiFillInstagram className="social-icon-hover" />
            </a>
            <a className="social-links" href="">
              <TfiTwitter className="social-icon" />
              <TfiTwitterAlt className="social-icon-hover" />
            </a>
          </div>
        </div>
      </div>

      <div className="profiles-info profiles-info-left">
        <div className="profiles-image">
          <img
            src={instructor.img_url}
            alt="Profile Image"
            className="profiles-image-img"
          />
        </div>
        <div className="consultation2">
          <button className="consultation2-btn2">Prendre consultation</button>
        </div>
        <div className="profiles-description">
          <p>{instructor.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;

// import React, { useEffect, useRef, useState } from "react";
// import { useQuery, useParams } from "react-query";
// import axios from "axios";

// import {
//   FiFacebook,
//   FaFacebookF,
//   AiFillInstagram,
//   AiOutlineInstagram,
//   TfiTwitterAlt,
//   TfiTwitter,
// } from "react-icons/all";
// import "./InstructorProfile.css";

// const InstructorProfile = () => {
//   const { id } = useParams();

//   const {
//     data: instructor,
//     isLoading,
//     error,
//   } = useQuery("instructor", async () => {
//     const response = await axios.get(
//       `http://127.0.0.1:8000/api/instructors/${id}`
//     );
//     return response.data.instructor;
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>An error occurred: {error.message}</div>;
//   }

//   if (!instructor) {
//     return <div>Instructor not found</div>;
//   }

//   return (
//     <div className="profiles-container">
//       <div className="profiles-background-image">
//         <img
//           src={instructor.background_img}
//           className="profiles-background-image"
//           alt="Background Image"
//         />
//         <div className="bg-overlay" ref={bgOverlayRef}></div>
//         <div className="profiles-name">
//           <h2>{instructor.name}</h2>
//           <div className="social-link-container">
//             <a className="social-links" href="">
//               <FiFacebook className="social-icon" />
//               <FaFacebookF className="social-icon-hover" />
//             </a>
//             <a className="social-links" href="">
//               <AiOutlineInstagram className="social-icon" />
//               <AiFillInstagram className="social-icon-hover" />
//             </a>
//             <a className="social-links" href="">
//               <TfiTwitter className="social-icon" />
//               <TfiTwitterAlt className="social-icon-hover" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="profiles-info profiles-info-left">
//         <div className="profiles-image">
//           <img
//             src={instructor.img_url}
//             alt="Profile Image"
//             className="profiles-image-img"
//           />
//         </div>
//         <div className="consultation2">
//           <button className="consultation2-btn2">Prendre consultation</button>
//         </div>
//         <div className="profiles-description">
//           <p>{instructor.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstructorProfile;


// import React from "react";
// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// import {
//   FiFacebook,
//   FaFacebookF,
//   AiFillInstagram,
//   AiOutlineInstagram,
//   TfiTwitterAlt,
//   TfiTwitter,
// } from "react-icons/all";
// import "./InstructorProfile.css";

// const InstructorProfile = () => {
//   const { id } = useParams();

//   const {
//     data: instructor,
//     isLoading,
//     error,
//   } = useQuery("instructor", async () => {
//     const response = await axios.get(
//       `http://127.0.0.1:8000/api/instructors/${id}`
//     );
//     return response.data.instructor;
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>An error occurred: {error.message}</div>;
//   }

//   if (!instructor) {
//     return <div>Instructor not found</div>;
//   }

//   return (
//     <div className="profiles-container">
//       <div className="profiles-background-image">
//         <img
//           src={instructor.background_img}
//           className="profiles-background-image"
//           alt="Background Image"
//         />
//         <div className="profiles-name">
//           <h2>{instructor.name}</h2>
//           <div className="social-link-container">
//             <a className="social-links" href="">
//               <FiFacebook className="social-icon" />
//               <FaFacebookF className="social-icon-hover" />
//             </a>
//             <a className="social-links" href="">
//               <AiOutlineInstagram className="social-icon" />
//               <AiFillInstagram className="social-icon-hover" />
//             </a>
//             <a className="social-links" href="">
//               <TfiTwitter className="social-icon" />
//               <TfiTwitterAlt className="social-icon-hover" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="profiles-info profiles-info-left">
//         <div className="profiles-image">
//           <img
//             src={instructor.img_url}
//             alt="Profile Image"
//             className="profiles-image-img"
//           />
//         </div>
//         <div className="consultation2">
//           <button className="consultation2-btn2">Prendre consultation</button>
//         </div>
//         <div className="profiles-description">
//           <p>{instructor.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstructorProfile;


// import React from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "react-query";
// import axios from "axios";

// function InstructorProfile() {
//   const { id } = useParams();

//   const { data: instructor, isLoading, isError } = useQuery(
//     ["instructor", id],
//     async () => {
//       const response = await axios.get(`http://127.0.0.1:8000/api/instructors/${id}`);
//       return response.data;
//     }
//   );

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (isError) {
//     return <p>Error fetching instructor data</p>;
//   }

//   if (!instructor) {
//     return <p>Instructor not found</p>;
//   }

//   return (
//     <div>
//       <h2>{instructor.name}</h2>
//       <p>{instructor.bio}</p>
//       {/* Render other instructor details */}
//     </div>
//   );
// }

// export default InstructorProfile;
