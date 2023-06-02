import React from "react";
import {
  VerifiedIcon,
  TriangleRightIcon,
  PlayIcon,
} from "@primer/octicons-react";
import "./Video.css";
import {BsPeople,BsEye} from "react-icons/bs";

function Video({
  image,
  yogaType,
  yogaDuration,
  yogaLevel,
  videoTitle,
  videoPlaylist,
  videoInstructor,
  icon,
  VideoViewsNumber,
  VideoClientNumber
}) {
  return (
    <>
      <div className="thumb-container">
        <div className="thumbnail-section">
          <a href="" className="yoga-thumbnail">
            <div className="thumbnail-image">
              <img src={image} alt="" />
              <div className="play-icon">
                <PlayIcon size={60} />
              </div>
              <div className="yoga-details">
                <div className="yoga-type">{yogaType}</div>
                <div className="yoga-duration">{yogaDuration}</div>
                <div className="yoga-level">
                  {" "}
                  <div className="yoga-level-icon">{icon}</div>
                  {yogaLevel}
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="video-info">
          <ul>
            <li>
              <div className="video-feeds">
                <div className="first-line">
                  <div id="views-number">
                    <BsEye size={15} className="icon-feed" />{" "}
                    {VideoViewsNumber}
                  </div>
                  <div id="client-numer">
                    <BsPeople size={17} className="icon-feed" />{" "}
                    {VideoClientNumber}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="" className="video-title">
                {videoTitle}
              </a>
            </li>
            <li>
              <a href="" className="video-playlist">
                {videoPlaylist}
              </a>
            </li>
            <li>
              <a href="" className="video-instructor">
                {videoInstructor}{" "}
                <VerifiedIcon size={14} className="icon-verifier" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Video;