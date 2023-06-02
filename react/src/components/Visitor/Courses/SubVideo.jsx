import React from "react";

import "./SubVideo.css";

import pr1 from "../../../assets/pr1.jpg";
import course1 from "../../../assets/course1.jpg"; 
import {
  LockIcon,
  ZapIcon,
  GlobeIcon,
  ClockIcon,
} from "@primer/octicons-react";

const SubVideo = () => {
  return (
    <>
      <div className="Sub-video-container">
        <div className="Sub-video-background-image">
          <img
            // src="https://d28gwrkukqy4h7.cloudfront.net/users/user-banner-default.png"
            src={course1}
            className="background-image-img"
          />

          <div className="bg-overlay"></div>

          <div className="start-now">
            <div className="lock-icon">
              <LockIcon size={34} />
            </div>
            <h1>POUR DÉBLOQUEZ CETTE CLASSE</h1>
            <a href="">Commencez votre essai gratuit aujourd'hui</a>
          </div>

          {/* ---------VIDEO---------------------- */}
          {/* <video src={video1} className="Subbed-video" controls>
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div className="Sub-video-cours-video-info">
          <div className="Sub-video-course-title">
            <h1>yoga pour les debutants ( titre du video )</h1>
          </div>
          <div className="Sub-video-descrip-cours">
            <p className="Sub-video-descrip-cours-paragraph">
              Vous avez des douleurs lombaires ? Ouvrez de l'espace dans cette
              zone en relâchant votre colonne vertébrale, vos hanches et vos
              ischio-jambiers dans ce cours de Hatha Yoga de 20 minutes. Vous
              créerez de la stabilité et soulagerez la pression dans le bas du
              dos avec des mouvements comme Triangle Pose, Pigeon Pose et de
              nombreux plis vers l'avant.
            </p>
          </div>
          <div className="cours-video-instru-info">
            <a href="">
              <img src={pr1} alt="" />
              <h2 className="video-instru-name">Tasha Rodriguez</h2>
            </a>
            <p className="video-instru-specia">Yoga Instructeur</p>
            <button className="consultation3-btn3">Prendre consultation</button>
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
                  Niveau
                </td>
                <td>
                  <GlobeIcon size={23} className="apercu-video-page-icon" />{" "}
                  Language
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="apercu-video-page-details">10min 22sec</td>
                <td className="apercu-video-page-details">Débutant</td>
                <td className="apercu-video-page-details">Français</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  );
};

export default SubVideo;
