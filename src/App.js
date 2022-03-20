
import AdvertsPage from "./components/adverts/Adverts/AdvertsPage";
import NewAdvertPage from "./components/adverts/Adverts/NewAdvertPage/NewAdvertPage";
import LoginPage from "./components/auth/LoginPage/LoginPage";


function App() {
  const container = true;
  return (
    <div className={('App', { container })}>
      <AdvertsPage />
      <NewAdvertPage />
      <LoginPage />
    </div>
  );
}

export default App;
