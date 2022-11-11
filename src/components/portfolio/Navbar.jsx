import { Component } from "react";
class Navbar extends Component{
  state = {
    visibility: false,
  }
  render(){
    return (
        <nav className={this.state.visibility ? "PRTFnavbar active" : "PRTFnavbar"}>
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
}
export default Navbar;