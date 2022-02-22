import {NavLink} from "react-router-dom";
import Profile from "../Profile/Profile"


import "./Header.scss";


export default function Header(){
  //"mb-3 c-header d-none d-lg-flex justify-content-between"
    return <header className = "c-header">
      
  <nav>
  <NavLink to="/" className="link">Home</NavLink>
  <NavLink to="characters" className="link">Characters</NavLink>
  <NavLink to="locations" className="link">Locations</NavLink>
<Profile/>
</nav>
</header>
}