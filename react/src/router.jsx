import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import InstructorLayout from "./components/layouts/InstructorLayout";
import DefaultLayout from "./components/layouts/DefaultLayout";
import InstructorDashboard from "./pages/InstructorDashboard";

import CreateCourseForm from "./components/instructor/dashboard/main/courses/CreateCourseForm";
import Courses from "./components/instructor/dashboard/main/courses/Courses";
import CreatePackForm from "./components/instructor/dashboard/main/packs/CreatePackForm";
import ProfileEdit from "./components/instructor/dashboard/main/profile/ProfileEdit";
import Profile from "./components/instructor/dashboard/main/profile/Profile";
import VisitorPage from "./pages/VisitorPage";
import Instructors from "./components/Visitor/InstructorsPage/Instructors";
import Signupage from "./pages/Signupage";
import GuestLayout from "./components/layouts/GuestLayout";
import SignIn from "./components/SignIn/SignIn";
import ForgetPasswordForm from "./components/SignIn/ForgetPasswordForm";
import VideosPage from "./components/videos/VideosPage";
import VCourses from "./components/Visitor/Courses/VCourses";
import Pack from "./components/Visitor/Packs/Pack";
import Packs from "./components/Visitor/Packs/Packs";
import PacksInstructor from "./components/instructor/dashboard/main/packs/PacksInstructor";
import InstructorProfile from "./components/Visitor/InstructorsPage/InstructorProfile";
import Dashbord from "./components/instructor/dashboard/main/dashboard/Dashbord";
import PricingCard from "./components/Visitor/Pricing/PricingCards";
import DefaultPage from "./pages/DefaultPage";
import ChangePassword from "./components/instructor/dashboard/main/profile/ChangePassword";
import EditCourse from "./components/instructor/dashboard/main/courses/EditCourse";
import SubVideo from "./components/Visitor/Courses/SubVideo";
import Live from "./components/instructor/dashboard/main/Lives/Live";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "",
        element: <VisitorPage />,
      },

      {
        path: "/explore",
        element: "",
        children: [
          {
            path: "/explore/instructors/",
            element: <Instructors />,
          },
          {
            path: "/explore/instructors/:id",
            element: <InstructorProfile />,
          },
          {
            path: "/explore/Courses",
            element: <VCourses />,
          },
          {
            path: "/explore/Packs",
            element: <Packs />,
          },
          {
            path: "/explore/Evenments",
            element: <Instructors />,
          },
        ],
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signupage />,
      },
      
      {
        path: "/reset-password",
        element: <ForgetPasswordForm />,
      },
    ],
  },
  {
    path: "/instructor",
    element: <InstructorLayout />,
    children: [
      {
        path: "",
        element: <Dashbord />,
      },
      {
        path: "/instructor/dashboard",
        element: <InstructorDashboard />,
        children: [
          {
            path: "/instructor/dashboard/courses",
            element: <Courses />,
          },
          {
            path: "/instructor/dashboard/courses/create",
            element: <CreateCourseForm />,
          },
          {
            path: "/instructor/dashboard/courses/:id/edit",
            element: <EditCourse />,
          },
          {
            path: "/instructor/dashboard/packs",
            element: <PacksInstructor />,
          },
          {
            path: "/instructor/dashboard/packs/create",
            element: <CreatePackForm />,
          },
          {
            path: "/instructor/dashboard/create-live",
            element: <Live />,
          },
        ],
      },
      {
        path: "/instructor/profile",
        element: <Profile />,
      },
      {
        path: "/instructor/profile/edit",
        element: <ProfileEdit />,
      },
      {
        path: "/instructor/profile/change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/user",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <DefaultPage />,
      },
      {
        path: "user/pricing",
        element: <PricingCard />,
      },
      {
        path: "/user/courses",
        element: <VCourses />,
      },
      {
        path: "/user/packs",
        element: <Packs />,
      },
      {
        path: "/user/instructors",
        element: <Instructors />,
      },
      {
        path: "/user/instructors/:id",
        element: <InstructorProfile />,
      },
    
      {
        path: "/user/courses/:id",
        element: <SubVideo />,
      },{
        path: "/user/profile",
        element: <ProfileEdit />,
      }
    ],
  },
]);
export default router;
