import { useContext } from "react";
import { loginContext } from "../context/logincontext";
import LoginPage from "../pages/login-page/login";

function ProtectedRoute({ children }) {
    const { loginStatus } = useContext(loginContext);

    if (loginStatus !== "success") {
        return <LoginPage />;
    }

    return children;
}

export default ProtectedRoute;
