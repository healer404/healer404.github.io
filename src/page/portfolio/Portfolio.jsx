import { Component } from "react";
import TrackVisibility from "react-on-screen";
import './portfolio.css';

import Intro from "../../components/portfolio/Intro";
import Navbar from "../../components/portfolio/Navbar";
import AboutMe from "../../components/portfolio/About";
import Projects from "../../components/portfolio/Projects";
class PortfolioPage extends Component{
  constructor(){
    super();
    this.state = {
      intro: {
        id: 'introduction',
        greeting: 'Hello, my name is',
        name: 'Roniel Duka',
        position: 'Junior Developer',
        cvlink: ''
      },
    }
  }
  render(){
    return (
      <>
        <TrackVisibility once>
          <Intro introData={this.state.intro} />
        </TrackVisibility>
        
        <TrackVisibility once>
          <AboutMe />
        </TrackVisibility>

        <TrackVisibility once>
          <Projects projectsVisible="true" />
        </TrackVisibility>
        <Navbar />
      </>
    )
  }
}
export default PortfolioPage;