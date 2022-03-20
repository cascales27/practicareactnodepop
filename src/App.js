
import AdvertsPage from "./components/adverts/Adverts/AdvertsPage";
import NewAdvertPage from "./components/adverts/Adverts/NewAdvertPage/NewAdvertPage";


function App() {
  const container = true;
  return (
    <div className={('App', { container })}>
      <AdvertsPage />
      <NewAdvertPage />
    </div>
  );
}

export default App;
