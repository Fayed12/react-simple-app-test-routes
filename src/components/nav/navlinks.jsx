import "./navlinks.css";
import { NavLink } from "react-router"; 

function NavLinks() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <span>Welcome</span>
        </div>
        <div className="links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavLinks;
