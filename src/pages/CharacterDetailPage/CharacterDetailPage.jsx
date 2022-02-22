import { useState, useEffect } from "react";
import { getCharacter } from "../../api/fetchToApi";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail/Detail";



const CharacterDetailPage = () => {
    const [character, setCharacter] = useState([]);
    let {id} = useParams ("id");

    useEffect(() => {
        if (id)
          getCharacter(id).then((data) => {
            setCharacter(data);
          });
      }, []);

      return (
        <div>
          {character.length !== 0 ? <Detail character={character} /> : null }
        </div>
      );
    
    };

    export default CharacterDetailPage;