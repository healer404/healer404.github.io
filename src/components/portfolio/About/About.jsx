import { Component } from "react";
import TrackVisibility from "react-on-screen";

import SectionHeader from "../Header";
import AboutSummary from "./Summary";

class AboutMe extends Component{
  constructor(props){
    super(props);
    this.state = {
      headerDetails: {
        id: 'about',
        title: 'About Me',
        subtitle: 'Let me tell you something'
      }
    }
  }
  render(){
    return (
      <>
      <TrackVisibility once tag="section" className="PRTFsection" id="about">
        <SectionHeader headerDetails={this.state.headerDetails} />
      </TrackVisibility>

      <TrackVisibility once>
        <AboutSummary />
      </TrackVisibility>
      </>
    )
  }
}
export default AboutMe;