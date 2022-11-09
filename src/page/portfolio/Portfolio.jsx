import { Component } from "react";
import './portfolio.css';

import Introduction from "./prt.intro";
import ContactMe  from "./prt.contact";
import Navbar from "./prt.navbar";
import AboutMe from "./prt.about";

class PortfolioPage extends Component{
  render(){
    return (
      <>
        <Introduction />
        <Navbar />
        <AboutMe />
        <ContactMe />
      </>
    )
  }
}
export default PortfolioPage;