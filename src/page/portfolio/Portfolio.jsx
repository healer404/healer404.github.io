import { Component } from "react";
import './portfolio.css';

import Introduction from "./prt.intro";
import ContactMe  from "./prt.contact";
import Navbar from "./prt.navbar";
import AboutMe from "./prt.about";
import Projects from "./prt.projects";

class PortfolioPage extends Component{
  render(){
    return (
      <>
        <Introduction />
        <Navbar />
        <AboutMe />
        <Projects />
        <ContactMe />
      </>
    )
  }
}
export default PortfolioPage;