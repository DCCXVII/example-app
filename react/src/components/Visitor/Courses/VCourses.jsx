import React, { useEffect, useState } from "react";
import GreyCover from "../../GreyCover/GreyCover";
import Video from "../../videos/Video";
import { MdOutlineSignalCellularAlt1Bar, MdOutlineSignalCellularAlt2Bar } from "react-icons/all";
import "./VCourses.css";
import { fetchCourses } from "../../api/api";
import { useLocation } from "react-router-dom";

const VCourses = () => {
  const [classesData, setClassesData] = useState([]);
  const location = useLocation();
  const disciplineId = new URLSearchParams(location.search).get("discipline_id");

  useEffect(() => {
    fetchCourses({ discipline_id: disciplineId })
      .then((courses) => {
        const newData = courses.map((course) => ({
          image: course.background_image,
          yogaType: course.discipline_id,
          yogaDuration: course.duration,
          yogaLevel: course.niveau,
          videoTitle: course.titre,
          videoPlaylist: course.classe_id, // You can replace this with actual playlist data if available
          videoInstructor: course.instructor_id,
          icon:
            course.niveau === "Débutant" ? (
              <MdOutlineSignalCellularAlt1Bar />
            ) : (
              <MdOutlineSignalCellularAlt2Bar />
            ),
          VideoViewsNumber: course.views_number,
          VideoClientNumber: course.sells_number,
        }));
        setClassesData(newData);
      })
      .catch((error) => {
        console.error("Failed to fetch courses:", error);
      });
  }, [disciplineId]);

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
