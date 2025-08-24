import "./contact.css";
import { useState } from "react";
import MessageSuccess from "../../components/messages/messageSuccess";
import MissValue from "../../components/missValue/missValue";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate()
  const [userContactData, setUserContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState(null)
  
  function handleSetMessageToNull() {
    setTimeout(() => {
      setMessageStatus(null);
    }, 4000);
  }

  function redirectTheUserToHomePage() {
    setTimeout(() => {
      navigate("/" , {replace:true})
    } , 4000)
  }

  // function to handle the message send or not and submit
  function handleSubmitingButton(e) {
    e.preventDefault();
    if (
      !userContactData.name ||
      !userContactData.email ||
      !userContactData.message
    ) {
      setMessageStatus("missValue");
      handleSetMessageToNull();
    } else {
      setMessageStatus("sendSuccess")
      handleSetMessageToNull();
      redirectTheUserToHomePage();
    }
  }

  // failed or success message component
  function MessageSend() {
    if (messageStatus === "missValue") {
      return(<MissValue></MissValue>)
    } else if (messageStatus === "sendSuccess") {
      return<MessageSuccess></MessageSuccess>
    }
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-text">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you as soon as possible.
      </p>

      <form className="contact-form" onSubmit={handleSubmitingButton}>
        <input
          type="text"
          placeholder="Your Name"
          value={userContactData.name}
          onChange={(e) =>
            setUserContactData({ ...userContactData, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Your Email"
          value={userContactData.email}
          onChange={(e) =>
            setUserContactData({ ...userContactData, email: e.target.value })
          }
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          value={userContactData.message}
          onChange={(e) =>
            setUserContactData({ ...userContactData, message: e.target.value })
          }
        ></textarea>
        <button>Send Message</button>
        <MessageSend></MessageSend>
      </form>
    </div>
  );
}

export default Contact;
