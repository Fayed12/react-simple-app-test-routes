import { StrictMode , useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// eslint-disable-next-line no-unused-vars
import { loginContext } from './context/logincontext.jsx'
// eslint-disable-next-line no-unused-vars
import { userContext } from './context/usercontext.jsx'
import App from './App.jsx'

// eslint-disable-next-line react-refresh/only-export-components
function Main() {
  const [loginStatus, setLoginStatus] = useState(null);
  const [userData, setUserData] = useState({});

  return (
    <loginContext.Provider value={{ loginStatus, setLoginStatus }}>
      <userContext.Provider value={{ userData, setUserData }}>
        <App />
      </userContext.Provider>
    </loginContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main></Main>
  </StrictMode>
);
