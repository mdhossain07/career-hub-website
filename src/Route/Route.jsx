import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import AppliedJobs from "../Pages/Applied Jobs/AppliedJobs";
import Blogs from "../Pages/Blogs/Blogs";
import JobDetails from "../components/Job Details/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs />,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "job/:id",
        element: <JobDetails />,
        loader: () => fetch("jobs.json"),
      },
    ],
  },
]);
export default router;
