import "./App.scss";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage.jsx";
import LocationsPage from "./pages/LocationsPage/LocationsPage.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="characters" element={<CharactersPage />} />
            <Route path="locations" element={<LocationsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
