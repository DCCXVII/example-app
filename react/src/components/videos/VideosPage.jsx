import React from "react";
import "./VideoPage.css";
import CardPack from "../instructor/dashboard/main/packs/CardPack";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";
import course4 from "../../assets/course4.jpg";

import Video from "./Video";
import VideoSelector from "./VideoSelector";
function VideosPage(props) {
  const courseData = {
    image: "",
    ccYogaType: "Vinyasa",
    ccYogaDuration: "60 minutes",
    ccYogaLevel: "Intermediate",
    ccVideoTitle: "Title of the video",
    ccVideoDescription:
      "The PDF file does not explicitly mention whether the record of coaching sessions is a video...",
    ccFeedsClientNumber: 20,
    ccFeedsViewsNumber: 100,
    ccFeedsLikes: 15,
    ccFeedsDislikes: 2,
  };

  return (
    <>
      {/* <GreyCover /> */}
      <div className="big-container">
        <div className="selector-video-card-grid">
          {/* --------------Client Side Videos-------------------- */}
          <VideoSelector
            image={course4}
            yogaType="Vinyasa"
            yogaDuration="30:00"
            yogaLevel="Intermidiate"
            videoTitle="Title of the video"
          />
          <VideoSelector
            image={course2}
            yogaType="Vinyasa"
            yogaDuration="30:00"
            yogaLevel="Intermidiate"
            videoTitle="Title of the video"
          />
          <VideoSelector
            image={course3}
            yogaType="Vinyasa"
            yogaDuration="30:00"
            yogaLevel="Intermidiate"
            videoTitle="Title of the video"
          />
          <VideoSelector
            image={course4}
            yogaType="Vinyasa"
            yogaDuration="30:00"
            yogaLevel="Intermidiate"
            videoTitle="Title of the video"
          />          
        </div>
      </div>
    </>
  );
}

export default VideosPage;
