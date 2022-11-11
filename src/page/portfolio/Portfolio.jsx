import { Component } from "react";
import './portfolio.css';

import Intro from "../../components/Intro";
import Navbar from "../../components/portfolio/Navbar";
class PortfolioPage extends Component{
  render(){
    return (
      <>
        <Intro />
        <Navbar />
      </>
    )
  }
}
export default PortfolioPage;