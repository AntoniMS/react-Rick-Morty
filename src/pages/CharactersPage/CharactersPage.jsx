import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";
import "./CharactersPage.scss";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const getCharacters = async (newPage = 1) => {
    const res = await axios(
      "https://rickandmortyapi.com/api/character?page=" + newPage
    );
    console.log(res.data.results);
    setCharacters(res.data.results);
    setTotalPages(res.data.info);
    
    
  };
  useEffect(() => {
    getCharacters();
    setIsLoaded(true); 
    
  }, []);

  return (
    <div>
      <h2 className="title">Rick & Morty Characters</h2>
      {!isLoaded ? (
        <div>
          <img
            src="https://3.bp.blogspot.com/-i5fyaRFFWA4/WKh_DSnq1HI/AAAAAAAABGA/xMVZuOWs8T8MBB-BWXTu7-CE9WXMBbk_ACLcB/s400/loading%2Bgif%2B3.gif"
            alt="RM Loading page"
          />
        </div>
      ) : (
        <div>
          <Pagination getCharacters={getCharacters} totalPages = {totalPages} />
          <Gallery list={characters} />
        </div>
      )}
    </div>
  );
}
