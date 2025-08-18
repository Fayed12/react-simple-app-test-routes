import { useContext } from "react";
import { userContext } from "../../context/usercontext";
import "./loginsuccess.css";

function SuccessLogin({ onClose }) {
  const user = useContext(userContext);

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>
        <h2 className="success-title">Login Successful!</h2>
        <p className="success-text">
          Welcome, <span className="username">{user?.username}</span>
        </p>
        <p className="success-text">Your email: {user?.email}</p>
      </div>
    </div>
  );
}

export default SuccessLogin;
