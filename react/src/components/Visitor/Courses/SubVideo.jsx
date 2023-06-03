import React, { useEffect, useState } from "react";
import { LockIcon, ZapIcon, GlobeIcon, ClockIcon } from "@primer/octicons-react";
import { useParams } from "react-router-dom";
import { fetchCourseDataById } from "../../api/api";
import "./SubVideo.css";
import pr1 from "../../../assets/pr1.jpg";

const SubVideo = () => {
  const [courseData, setCourseData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCourseDataById(id);
        setCourseData(data.courses[0]);
      } catch (error) {
        console.error("Failed to fetch course data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!courseData) {
    return null; // Display a loading state or placeholder while fetching data
  }

  const {
    titre,
    description,
    background_image,
    duration,
    niveau,
    instructor_name,
    language,
  } = courseData;

  return (
    <>
      <div className="Sub-video-container">
        <div className="Sub-video-background-image">
          <img src={background_image} className="background-image-img" />

          <div className="bg-overlay"></div>

          <div className="start-now">
            <div className="lock-icon">
              <LockIcon size={34} />
            </div>
            <h1>POUR DÉBLOQUEZ CETTE CLASSE</h1>
            <a href="">Commencez votre essai gratuit aujourd'hui</a>
          </div>
        </div>
        <div className="Sub-video-cours-video-info">
          <div className="Sub-video-course-title">
            <h1>{titre}</h1>
          </div>
          <div className="Sub-video-descrip-cours">
            <p className="Sub-video-descrip-cours-paragraph">{description}</p>
          </div>
          <div className="cours-video-instru-info">
            <a href="">
              <img src={pr1} alt="" />
              <h2 className="video-instru-name">{instructor_name}</h2>
            </a>
            <p className="video-instru-specia">Yoga Instructeur</p>
            <button className="consultation3-btn3">
              Prendre consultation
            </button>
          </div>
        </div>
        <div className="apercu-video-page">
          <div className="apercu-container">
            <h2 className="apercu">Aperçu</h2>
          </div>
          <table className="table-apercu">
            <thead>
              <tr>
                <td>
                  <ClockIcon className="apercu-video-page-icon" size={23} />{" "}
                  Duration
                </td>
                <td>
                  <ZapIcon size={23} className="apercu-video-page-icon" />{" "}
                  {niveau}
                </td>
                <td>
                  <GlobeIcon size={23} className="apercu-video-page-icon" />{" "}
                  Language
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="apercu-video-page-details">{duration}</td>
                <td className="apercu-video-page-details">{niveau}</td>
                <td className="apercu-video-page-details">{language}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SubVideo;
