import { Link } from "react-router";
import { useContext } from "react";
import { userContext } from "../../context/usercontext";
import "./home.css";

function Home() {
  const { userData } = useContext(userContext);

  return (
    <section className="welcome">
      <div className="overlay"></div>
      <div className="content">
        <h1>
          Welcome <span>{userData.username || "Guest"}</span> to Our App
        </h1>
        <p>Explore our products or get in touch with us today.</p>
        <div className="buttons">
          <Link to="/products" className="btn primary">
            View Products
          </Link>
          <Link to="/contact" className="btn secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
