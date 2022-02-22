import { useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";

export default function Profile() {
  const {profile} = useContext(ProfileContext);

  return (
    <div>
      <img src={profile.image} alt="" />
      <h4>
        {profile.name} | {profile.species}
      </h4>
      <div>
        
      </div>
    </div>
  );
}
