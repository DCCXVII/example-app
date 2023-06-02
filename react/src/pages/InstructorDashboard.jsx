import { Outlet, useLocation } from "react-router-dom";
import "../index.css";
import NavbarDash from "../components/instructor/dashboard/NavbarDash/NavbarDash";

function InstructorPage() {
  const links = [
    {
      label: "Courses",
      url: "/instructor/dashboard/courses",
      isActive: location.pathname == "/instructor/dashboard/courses",
    },
    {
      label: "Packs",
      url: "/instructor/dashboard/packs",
      isActive: location.pathname == "/instructor/dashboard/packs",
    },
    {
      label: "Create a Pack",
      url: "/instructor/dashboard/packs/create",
      isActive: location.pathname == "/instructor/dashboard/packs/create",
    },
    {
      label: "Create a Course",
      url: "/instructor/dashboard/courses/create",
      isActive: location.pathname == "/instructor/dashboard/courses/create",
    },
    ,
    {
      label: "Edit Course",
      url: "/instructor/dashboard/courses/:id/edit",
      isActive: location.pathname == "//instructor/dashboard/courses/:id/edit",
    },
  ];

  return (
    <>
      <div className="blank-div"></div>
      <NavbarDash links={links} />
      <Outlet />
    </>
  );
}

export default InstructorPage;