import React from "react";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAtuh from "./components/auth/RequireAuth";
import AdvertsPage from "./components/adverts/AdvertsPage/AdvertsPage";
import AdvertPage from "./components/adverts/AdvertPage/AdvertPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage";
import { AuthContextProvider } from "./components/auth/context";
import LoginPage from "./components/auth/LoginPage/LoginPage";


function App({ isInitiallyLogged }) {
  const [ isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout  = () => {
    setIsLogged(false);
  };


  return (
  
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout}}>
        <Routes>
      
       
        
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />}
               />
          
            <Route path="/adverts"
             element={<RequireAtuh>
               <AdvertsPage />
             </RequireAtuh>}/>


            <Route path="/adverts/new"
             element={
               <RequireAtuh>
                 <NewAdvertPage />
               </RequireAtuh>} />

            <Route path="/adverts/:advertId"
             element={<RequireAtuh>
               <AdvertPage />
             </RequireAtuh>} />


            <Route path="/" element={<Navigate to="/adverts" />} />

            <Route path="/404" element={<div>404 || Pagina no encontrada</div>} />
              
        
            <Route path="*" element={<Navigate to="/404" />}/>
        
       
            </Routes>
      </AuthContextProvider>
    
  
  );
}

export default App;
