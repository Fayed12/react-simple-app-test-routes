import { useContext } from "react";
import { loginContext } from "../context/logincontext";
import { Navigate } from "react-router";


function ProtectedRoute({ children }) {
    const { loginStatus } = useContext(loginContext);

    if (loginStatus !== "success") {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;
