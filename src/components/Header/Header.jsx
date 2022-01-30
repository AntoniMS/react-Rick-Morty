import {NavLink} from "react-router-dom";
import "./Header.scss";


export default function Header(){
    return <header className = "c-header">

  <nav>
  <NavLink to="/" className="link">Home</NavLink>
  <NavLink to="characters" className="link">Characters</NavLink>
  <NavLink to="locations" className="link">Locations</NavLink>
</nav>
</header>
}