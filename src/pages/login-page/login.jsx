import InputLayout from "../../components/input";
import { useContext} from "react";
import { userContext } from "../../context/usercontext";
import { loginContext } from "../../context/logincontext";
import FailedLogin from "../../components/faildlogin/faild-login";
import SuccessLogin from "../../components/success/loginsucces";
import { useNavigate } from "react-router";
import MissValue from "../../components/missValue/missValue";
import { useState } from "react";
import LoadingPage from "../../components/loading/loading";
import "./login.css";

function LoginPage() {
  const navigate = useNavigate();

  const defaultUser = {
    username: "Mohamed Fayed",
    Password: "123moh",
    email: "memad4858@gmail.com",
  };

  const { userData, setUserData } = useContext(userContext);
  const { loginStatus, setLoginStatus } = useContext(loginContext);
  const [missingValue, setMissingValue] = useState(false);
  const [loadingSatuts , setLoadingSatuts] = useState(false)

  // regular expression
  const regName = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/g;
  const regEmail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g;

  // function to handle the value is filled or not
  // return true to tell you that there is missing value
  // and return false to enter the next condition
  function handleMissingValues() {
    if (!userData.username || !userData.Password || !userData.email) {
      setMissingValue(true);
      setTimeout(() => setMissingValue(false), 3000);
      return true;
    }
    return false;
  }

  // function to handle the the regular expression
  // return true to tell you that the checking is faild and still in condtion
  // and return false to enter the next condition
  function handleRegex() {
    if (!regName.test(userData.username)){
      alert("Please enter a valid name (e.g., Jone Doe)");
      return true;
    } else if(!regEmail.test(userData.email)){
      alert("Please enter a valid email address (e.g., user@example.com)");
      return true;
    }
    return false;
  }

  // function to compare the data in storage with the data user entered
  function handleCompareUserData() {
    if (
      defaultUser.username === userData.username &&
      defaultUser.Password === userData.Password &&
      defaultUser.email === userData.email
    ) {
      setLoginStatus("success");
      setTimeout(() => {
        setLoadingSatuts(true);
      }, 2000)
      
      setTimeout(() => {
        setLoadingSatuts(false)
        navigate("/", { replace: true });
      }, 5000);
    } else {
      setLoginStatus("failed");
    }
  }

  // the main function handeler

  function handleFormButtonSubmit(event) {
    // stop the submitting of the button form
    event.preventDefault();

    // check if all values filled
    if (handleMissingValues()) {
      return

    // check the regex
    } else if (handleRegex()) {
      return

    // compare the user data
    } else {
      handleCompareUserData();
    }
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-image">
          <div className="welcome-message">
            <h1 className="form-title">Welcome back</h1>
            <h2 className="form-sub-title">we missed you</h2>
          </div>
          <div className="title-overlay"></div>
        </div>
        <div className="form-content">
          <h1 className="form-title-2">login</h1>
          <form onSubmit={handleFormButtonSubmit}>
            <InputLayout
              type="text"
              name="username"
              message="Jone Doe"
              value={userData}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
              letterLength={{ max: 50, min: 10 }}
            />
            <InputLayout
              type="password"
              name="password"
              message="Pass***"
              value={userData}
              onChange={(e) =>
                setUserData({ ...userData, Password: e.target.value })
              }
              letterLength={{ max: 32, min: 6 }}
            />
            <InputLayout
              type="text"
              name="email"
              message="example@gmail.com"
              value={userData}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              letterLength={{ max: 1000, min: 1 }}
            />

            <button type="submit" className="btn">
              Submit
            </button>

            {/* login success and loading page*/}
            {loginStatus === "success" && (
              <div>
                <SuccessLogin onClose={() => setLoginStatus(null)} />
                {loadingSatuts && <LoadingPage></LoadingPage>}
              </div>
            )}

            {/* login failed */}
            {loginStatus === "failed" && (
              <FailedLogin onClose={() => setLoginStatus(null)} />
            )}
            {missingValue && <MissValue></MissValue>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;