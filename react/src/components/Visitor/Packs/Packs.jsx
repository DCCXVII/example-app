import course1 from "../../../assets/course1.jpg";
import course2 from "../../../assets/course2.jpg";
import course3 from "../../../assets/course3.jpg";
import course4 from "../../../assets/course4.jpg";
import course5 from "../../../assets/course5.jpg";
import GreyCover from "../../GreyCover/GreyCover";
import Pack from "./Pack";
import "./Packs.css";

const Packs = () => {
  const packsData = [
    {
      image: course4,
      yogaDuration: "30:00",
      yogaLevel: "Intermidiate",
      videoTitle: "Title of the video",
      videoPlaylist: "the playlist of the video",
      videoInstructor: "Elyass Hafidi",
      cpVideoDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      cpFeedsClientNumber: "20",
      cpFeedsViewsNumber: "100",
      yogaType: "Vinyassa",
      cpPackLevel: "Hard",
    },
    {
      image: course1,
      yogaDuration: "30:00",
      yogaLevel: "Intermidiate",
      videoTitle: "Title of the video",
      videoPlaylist: "the playlist of the video",
      videoInstructor: "Elyass Hafidi",
      cpVideoDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      cpFeedsClientNumber: "20",
      yogaType: "Vinyassa",
      cpFeedsViewsNumber: "100",
      cpPackLevel: "Hard",
    },
    {
      image: course2,

      yogaDuration: "30:00",
      yogaLevel: "Intermidiate",
      videoTitle: "Title of the video",
      videoPlaylist: "the playlist of the video",
      videoInstructor: "Elyass Hafidi",
      yogaType: "Vinyassa",
      cpVideoDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      cpFeedsClientNumber: "20",
      cpFeedsViewsNumber: "100",
      cpPackLevel: "Hard",
    },
    {
      image: course3,
      yogaDuration: "30:00",
      yogaLevel: "Intermidiate",
      videoTitle: "Title of the video",
      yogaType: "Vinyassa",
      videoPlaylist: "the playlist of the video",
      videoInstructor: "Elyass Hafidi",
      cpVideoDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      cpFeedsClientNumber: "20",
      cpFeedsViewsNumber: "100",
      cpPackLevel: "Hard",
    },
    {
      image: course4,
      yogaLevel: "Intermidiate",
      videoTitle: "Title of the video",
      yogaType: "Vinyassa",
      videoPlaylist: "the playlist of the video",
      videoInstructor: "Elyass Hafidi",
      cpVideoDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      cpFeedsClientNumber: "20",
      cpFeedsViewsNumber: "100",
      cpPackLevel: "Hard",
    },
  ];
  return (
    <>
      <GreyCover
        title="Nos Packs"
        paragraph="Élevez votre pratique du yoga avec nos packs axés sur la force et la flexibilité"
      />
      <div className="big-container-packs">
        <div className="packs-card-grid">
          {packsData.map((video, index) => (
            <Pack
              key={index}
              image={video.image}
              yogaType={video.yogaType}
              yogaDuration={video.yogaDuration}
              yogaLevel={video.yogaLevel}
              videoTitle={video.videoTitle}
              videoPlaylist={video.videoPlaylist}
              videoInstructor={video.videoInstructor}
              cpVideoDescription={video.cpVideoDescription}
              cpFeedsClientNumber={video.cpFeedsClientNumber}
              cpFeedsViewsNumber={video.cpFeedsViewsNumber}
              cpPackLevel={video.cpPackLevel}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Packs;
