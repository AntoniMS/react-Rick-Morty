import axios from "axios";
import { useEffect, useState } from "react";
import LocationsGallery from "../../components/LocationsGallery/LocationsGallery";
import Pagination from "../../components/Pagination/Pagination";
import "./LocationsPage.scss";


export default function LocationsPage() {
  const [locations, setLocations] = useState([]);

  const getLocations = async (newPage = 1) => {
    const res = await axios("https://rickandmortyapi.com/api/location?page=" + newPage);
    console.log(res.data.results);
    setLocations(res.data.results);
  };
  useEffect(() => {
      
      
      getLocations();
      
    }, [])
    

  return <div>
     <h2 className="title">Rick & Morty Locations</h2>
      <Pagination getData={getLocations}/> 
      <LocationsGallery list={locations} />
    </div>
  
} 

