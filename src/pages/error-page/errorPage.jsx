import { useNavigate } from "react-router";
import "./errorPage.css";
function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">
        Oops! The page you’re looking for doesn’t exist 😶
      </p>
      <button
        onClick={() => navigate("/", { replace: true })}
        className="error-button"
      >
        Back to Home Page
      </button>
    </div>
  );
}

export default ErrorPage;
