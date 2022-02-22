const CharactersURL = "https://rickandmortyapi.com/api/character/";


export const getCharacter = async (id) => {
  const res = await fetch(`${CharactersURL}${id}`);
    if (res.ok) {
        return res.json();
    } else {
        return [];
    }
};


  
 