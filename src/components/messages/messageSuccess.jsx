import "./messageSuccess.css";

function MessageSuccess({ userName }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>✅ Message Sent</h2>
        <p>
          Thank you <strong>{userName}</strong> for your message
        </p>
        <p>We will contact you later</p>
      </div>
    </div>
  );
}

export default MessageSuccess;
