import NavLinks from "../components/nav/navlinks";
import Footer from "../pages/footer/footer";
import { Outlet } from "react-router";

function MainLayout() {
    return (
        <>
            <NavLinks></NavLinks>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}

export default MainLayout;