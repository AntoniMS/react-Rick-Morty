import { useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import { Link, generatePath } from "react-router-dom";

export default function Gallery({ list }) {
  const { setProfile } = useContext(ProfileContext);
  return (
    <div className="container">
      {list.map((item) => (
        
          <figure key={item.id} className="char"> {/* col-12 col-sm-6 col-md-4 col-lg-3 */}
            <button onClick={() => setProfile(item)} className="btn">
              {item.name}
            </button>
      
            <img onClick={() => setProfile(item)} src={item.image} alt={item.name} />
       
            <p>Status: {item.status}</p>
          </figure>
      ))}
    </div>
  );
}
