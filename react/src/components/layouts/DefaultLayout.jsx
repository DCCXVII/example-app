import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../instructor/dashboard/navbar/Navbar";
import SignIn from "../SignIn/SignIn";
import Footer from "../Footer/Footer";
import Slider from "../Visitor/Slider/Slider";
import { Logout } from "../api/api";
import { userData } from "../api/api";
import {
  HomeIcon,
  PlayIcon,
  PersonFillIcon,
  DiffAddedIcon,
  VideoIcon,
  CalendarIcon,
  SignOutIcon,
  FileDirectoryIcon,
  GlobeIcon,
  PeopleIcon 
} from "@primer/octicons-react";
function DefaultLayout() {
  const Navlink = [
    {
      icon: <HomeIcon size={22} />,
      text: "Home",
      link: "/user",
    }
  ];

  const profile = [
    {
      Username: userData.name,
      email: userData.email,
      image: userData.image,
      link: "/user/profile"
    },
  ];
  const dropdownItems = [
    {
      link: "/user/purchase",
      icon: <PlayIcon size={18} className="new-icon" />,
      name: "Mes Courses",
    },
    {
      link: "/instructor/dashboard/packs",
      icon: <FileDirectoryIcon size={18} className="new-icon" />,
      name: "Mes Packs",
    },
    {
      link: "/instructor",
      icon: <VideoIcon size={18} className="new-icon" />,
      name: "Live Session",
    },
    {
      link: "#",
      icon: <CalendarIcon size={18} className="new-icon" />,
      name: "Session de Consultation",
    },
  ];

  const exploreItems = [
    {
      link: "/user/instructors",
      icon: <GlobeIcon size={22} />,
      name: "Explore",
      dropdown: [
        {
          link: "/user/courses",
          icon: <PlayIcon size={18} className="new-icon" />,
          name: "Courses",
        },
        {
          link: "/user/packs",
          icon: <FileDirectoryIcon  size={18} className="new-icon" />,
          name: "Packs",
        },
        // Add more dropdown items as needed
      ],
      
    },
    {
      link: "/user/instructors",
      icon: <PeopleIcon  size={22} />,
      name: "Instructeurs",
    }
    // Add more explore items as needed
    
    
  ];

  return (
    <>
      <Navbar items={dropdownItems} profile={profile} Navlink={Navlink} explore={exploreItems}/>
      <div className="blank-div"></div>
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
