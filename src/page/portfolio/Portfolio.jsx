import { Component } from "react";
import './portfolio.css';

import Introduction from "./prt.intro";
import ContactMe  from "./prt.contact";
import Navbar from "./prt.navbar";

class PortfolioPage extends Component{
  render(){
    return (
      <>
        <Introduction />
        <Navbar />
        <ContactMe />
      </>
    )
  }
}
export default PortfolioPage;