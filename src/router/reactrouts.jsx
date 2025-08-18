import About from "../pages/about-page/about";
import Home from "../pages/home-page/home";
import Contact from "../pages/contact/contact";
import MainLayout from "../layout/loggedinaLyout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);
export default router;