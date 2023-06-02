import { Outlet } from "react-router-dom";
import "../index.css";
import Slider from "../components/Visitor/Slider/Slider";
import ImageGrid from "../components/Visitor/ImageGird/ImageGrid";
import InstructorSection from "../components/Visitor/Sections/InstructorSection";
const DefaultPage = () => {
  return (
    <>
      <Slider />
      <ImageGrid />
      <InstructorSection />
    </>
  );
};

export default DefaultPage;
