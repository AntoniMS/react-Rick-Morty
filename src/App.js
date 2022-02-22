import "./App.scss";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from "react";
import {ProfileContext} from "./contexts/ProfileContext.js"
import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage.jsx";
import LocationsPage from "./pages/LocationsPage/LocationsPage.jsx";
import Header from "./components/Header/Header.jsx";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage.jsx";



function App() {
  const [profile, setProfile] = useState({
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  });

  return (
    <div className="App">
      <BrowserRouter>
      <ProfileContext.Provider value={{profile, setProfile}}>
        <Header/>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="characters" element={<CharactersPage />} />
            <Route path="locations" element={<LocationsPage />} />
            <Route path="characters/:id" element={<CharacterDetailPage />} />
          </Route>
        </Routes>
        </ProfileContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
