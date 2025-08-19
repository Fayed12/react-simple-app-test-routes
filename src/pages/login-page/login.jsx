import InputLayout from "../../components/input";
import { useContext} from "react";
import { userContext } from "../../context/usercontext";
import { loginContext } from "../../context/logincontext";
import FailedLogin from "../../components/faildlogin/faild-login";
import SuccessLogin from "../../components/success/loginsucces";

import {useNavigate } from "react-router";
import "./login.css";

function LoginPage() {
  const navigate = useNavigate();

  const defaultUser = { username: "m", Password: "1", email: "m" };

  const { userData, setUserData } = useContext(userContext);
  const { loginStatus, setLoginStatus } = useContext(loginContext);

  function handleFormButtonSubmit(event) {
    event.preventDefault();
    if (
      defaultUser.username === userData.username &&
      defaultUser.Password === userData.Password &&
      defaultUser.email === userData.email
    ) {
      setLoginStatus("success");
      setTimeout(() => {
        navigate("/", { replace: true });
      } , 2000)
    } else {
      setLoginStatus("failed");
    }
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleFormButtonSubmit}>
        <InputLayout
          type="text"
          name="username"
          message="Jone Doe"
          value={userData}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <InputLayout
          type="password"
          name="password"
          message="Pass***"
          value={userData}
          onChange={(e) =>
            setUserData({ ...userData, Password: e.target.value })
          }
        />
        <InputLayout
          type="text"
          name="email"
          message="example@gmail.com"
          value={userData}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />

        <button type="submit" className="btn">
          Submit
        </button>

        {loginStatus === "success" && (
          <SuccessLogin onClose={() => setLoginStatus(null)} />
        )}
        {loginStatus === "failed" && (
          <FailedLogin onClose={() => setLoginStatus(null)} />
        )}
      </form>
    </div>
  );
}

export default LoginPage;
