import './App.css'
import LoginPage from './pages/login-page/login';
import { useContext } from 'react';
import { loginContext } from './context/logincontext';
import {RouterProvider } from 'react-router';
import router from './router/reactrouts';

function App() {
  const loginSatuts = useContext(loginContext);
  let loginSatutsFromContext = loginSatuts.loginStatus;

  if (loginSatutsFromContext === null || loginSatutsFromContext === "failed") {
    return <LoginPage />;
  }else if (loginSatutsFromContext=== "success") {
    return <RouterProvider router={router}></RouterProvider>
  }
}

export default App
