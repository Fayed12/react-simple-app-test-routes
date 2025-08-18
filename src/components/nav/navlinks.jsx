import "./navlinks.css"
import { NavLink } from "react-router";

function NavLinks() {
    return (
      <>
        <div className="header">
          <div className="nav">
            <div className="logo">
              <span>welcome</span>
            </div>
            <div className="links">
              <NavLink to="/">
                <span className="display-block m-[10px] cursor-pointer">
                  Home
                </span>
              </NavLink>
              <NavLink to="/about">
                <span className="display-block m-[10px] cursor-pointer">
                  About
                </span>
              </NavLink>
              <NavLink to="/contact">
                <span className="display-block m-[10px] cursor-pointer">
                  Contact
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
}

export default NavLinks;