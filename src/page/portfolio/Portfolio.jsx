import { Component } from "react";
import './portfolio.css';

import Intro from "../../components/portfolio/Introduction/Intro";
import Navbar from "../../components/portfolio/Navbar";
import AboutMe from "../../components/portfolio/About";
import Projects from "../../components/portfolio/Projects";
class PortfolioPage extends Component{
  render(){
    return (
      <>
        <Intro />
        
        {/* <TrackVisibility once>
          <AboutMe />
        </TrackVisibility>

        <TrackVisibility once>
          <Projects projectsVisible="true" />
        </TrackVisibility> */}
        <Navbar />
      </>
    )
  }
}
export default PortfolioPage;