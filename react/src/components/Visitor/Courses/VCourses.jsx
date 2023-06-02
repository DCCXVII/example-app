import course1 from "../../../assets/course1.jpg";
import course4 from "../../../assets/course4.jpg";

import GreyCover from "../../GreyCover/GreyCover";
import Video from "../../videos/Video";
import "./VCourses.css";
import {
  MdOutlineSignalCellularAlt1Bar,
  MdOutlineSignalCellularAlt,
  MdOutlineSignalCellularAlt2Bar,
} from "react-icons/all";
const VCourses = () => {
  const classesData = [
    {
      image: course4,
      yogaType: "Vinyasa",
      yogaDuration: "30:00",
      yogaLevel: "Intermediate",
      videoTitle: "Title of the video",
      videoPlaylist: "The playlist of the video",
      videoInstructor: "Elyass Hafidi",
      icon: <MdOutlineSignalCellularAlt2Bar />,
      VideoViewsNumber: 533,
      VideoClientNumber: 334,
    },
    {
      image: course1,
      yogaType: "Vinyasa",
      yogaDuration: "30:00",
      yogaLevel: "Beginner",
      videoTitle: "Title of the video",
      videoPlaylist: "The playlist of the video",
      videoInstructor: "Elyass Hafidi",
      icon: <MdOutlineSignalCellularAlt1Bar />,
      VideoViewsNumber: 533,
      VideoClientNumber: 334,
    },
  ];
  return (
    <>
      <GreyCover
        title="Nos Courses"
        paragraph="Trouvez l'équilibre émotionnel et la tranquillité intérieure grâce à la pratique régulière du yoga"
      />
      <div className="big-container-classes">
        <div className="classes-card-grid">
          {classesData.map((video, index) => (
            <Video
              key={index}
              image={video.image}
              yogaType={video.yogaType}
              yogaDuration={video.yogaDuration}
              yogaLevel={video.yogaLevel}
              videoTitle={video.videoTitle}
              videoPlaylist={video.videoPlaylist}
              videoInstructor={video.videoInstructor}
              icon={video.icon}
              VideoClientNumber={video.VideoClientNumber}
              VideoViewsNumber={video.VideoViewsNumber}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default VCourses;
