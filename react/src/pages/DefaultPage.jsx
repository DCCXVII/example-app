import { Outlet } from "react-router-dom";
import "../index.css";
import Slider from "../components/Visitor/Slider/Slider";
import ImageGrid from "../components/Visitor/ImageGird/ImageGrid";
import InstructorSection from "../components/Visitor/Sections/InstructorSection";
import SubVideo from "../components/Visitor/Courses/SubVideo";
const DefaultPage = () => {
  return (
    <>
      <Slider />
      <ImageGrid />
      <InstructorSection />

      <SubVideo/>


    </>
  );
};

export default DefaultPage;
