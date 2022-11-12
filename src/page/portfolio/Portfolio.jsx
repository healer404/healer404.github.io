import { Component } from "react";
import './portfolio.css';

import Intro from "../../components/portfolio/Introduction/Intro";
import Navbar from "../../components/portfolio/Navbar";
import AboutMe from "../../components/portfolio/About/About";
import Projects from "../../components/portfolio/Projects";
class PortfolioPage extends Component{
  render(){
    return (
      <>
        <Intro />
        <AboutMe />
        <Projects projectsVisible="true" />
        
        {/* <TrackVisibility once>
        </TrackVisibility>

        <TrackVisibility once>
        </TrackVisibility> */}
        <Navbar />
      </>
    )
  }
}
export default PortfolioPage;