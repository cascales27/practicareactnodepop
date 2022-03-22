import { useState } from "react";
import AdvertsPage from "./components/adverts/Adverts/AdvertsPage";


import LoginPage from "./components/auth/LoginPage/LoginPage";


function App({ isInitiallyLogged }) {
  const [ isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout  = () => {
    setIsLogged(false);
  };
  return (
    <div className='App'>
      {/*<AdvertsPage />
      <NewAdvertPage /> */}
      {isLogged ? (<AdvertsPage isLogged={isLogged} onLogout={handleLogout}/> ) 
      : (<LoginPage onLogin={handleLogin}/>)} 
    </div>
  );
}

export default App;
