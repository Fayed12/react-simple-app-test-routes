import "./fail.login.css";

function FailedLogin({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box failed">
        <button className="popup-close-fail" onClick={onClose}>
          ✖
        </button>
        <h2 className="failed-title">Login Failed!</h2>
        <p className="failed-text">The username or password is incorrect.</p>
        <p className="failed-text">Please try again.</p>
      </div>
    </div>
  );
}

export default FailedLogin;
