import { useRef } from "react";
import Observer from '../../../hooks/observer';
import './navbar.css';

const Navbar = () => {
  const refNavbar = useRef(null);
  return (
    <nav className={`PRTFnavbar ${Observer(refNavbar) ? "active" : ""}`} ref={refNavbar}>
      <a href="#introduction" className="item">
        <i className="fas fa-file"></i>
        <span>Resume</span>
      </a>
      <a href="#about" className="item">
        <i className="fas fa-user"></i> 
        <span>About Me</span>
      </a>
      <a href="/" className="item brand">
        <img src="./assets/happs.png" alt="happs" />
        <span>Home</span>
      </a>
      <a href="#contact" className="item">
        <i className="fas fa-phone"></i>
        <span>Contact</span>
      </a>
      <a href="#projects" className="item">
        <i className="fas fa-folder"></i>
        <span>Projects</span>
      </a>
    </nav>
  )
}
export default Navbar;