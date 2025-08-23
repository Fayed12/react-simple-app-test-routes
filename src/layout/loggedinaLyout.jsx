import NavLinks from "../components/nav/navlinks";
import Footer from "../pages/footer/footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <NavLinks />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default MainLayout;
