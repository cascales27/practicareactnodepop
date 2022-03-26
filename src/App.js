import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdvertsPage from "./components/adverts/AdvertsPage/AdvertsPage";
import AdvertPage from "./components/adverts/AdvertPage/AdvertPage"



import LoginPage from "./components/auth/LoginPage/LoginPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage/NewAdvertPage";


function App({ isInitiallyLogged }) {
  const [ isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout  = () => {
    setIsLogged(false);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/api/auth/login" element={<LoginPage onLogin={handleLogin}/>}/>
        <Route path="/api/v1/adverts" element={<AdvertsPage isLogged={isLogged} onLogout={handleLogout}/>} />
        <Route path="api/v1/adverts/:advertId" element={<AdvertPage />}></Route>
        <Route path="api/v1/adverts" element={<NewAdvertPage />}></Route>
        <Route path="/" element={<Navigate to="/api/v1/auth" />}></Route>
        <Route path="/404" element={<div>404 | Not Found Page</div>}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
      {/*<AdvertsPage />
      <NewAdvertPage /> */}
    
    </div>
  );
}

export default App;
