import { Component } from "react";
import TrackVisibility from "react-on-screen";
import './portfolio.css';

import Intro from "../../components/portfolio/Intro";
import Navbar from "../../components/portfolio/Navbar";
class PortfolioPage extends Component{
  constructor(props){
    super(props);
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
          <Intro introData={this.state.intro} isVisible="true" />
        </TrackVisibility>
        <Navbar />
      </>
    )
  }
}
export default PortfolioPage;