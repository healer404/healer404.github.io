import { useRef } from "react";
import RefObserver from "./inc.observer";

const Navbar = () => {
  const refNavbar = useRef(null);
  return (
    <nav className={RefObserver(refNavbar) ? "PRTFnavbar active" : "PRTFnavbar"} ref={refNavbar}>
      <a href="#" className="item">
        <i className="fas fa-file"></i>
        <span>Resume</span>
      </a>
      <a href="#" className="item">
        <i className="fas fa-user"></i> 
        <span>About Me</span>
      </a>
      <a href="/" className="item brand">
        <img src="./assets/happs.png" alt="happs" />
        <span>Home</span>
      </a>
      <a href="#" className="item">
        <i className="fas fa-phone"></i>
        <span>Contact</span>
      </a>
      <a href="#" className="item">
        <i className="fas fa-folder"></i>
        <span>Projects</span>
      </a>
    </nav>
  )
}
export default Navbar;