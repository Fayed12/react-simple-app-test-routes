import { useContext } from "react";
import { userContext } from "../../context/usercontext";
import "./home.css";

function Home() {
  const { userData } = useContext(userContext);

  return (
    <div className="home-container">
      <div className="home-card">
        <h2 className="home-username">
          👋 Welcome, <span>{userData?.username || "Guest"}</span>
        </h2>
        <h1 className="home-title">Home Page</h1>
        <p className="home-text">
          This is your main dashboard after logging in successfully. Use the
          navigation bar above to explore other pages.
        </p>
      </div>
    </div>
  );
}

export default Home;
