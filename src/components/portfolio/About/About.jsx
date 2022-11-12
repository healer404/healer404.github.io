import { Component } from "react";
import TrackVisibility from "react-on-screen";

import SectionHeader from "../Header";
import AboutSummary from "./Summary";
import AboutDetails from "./Details";

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
      <section className="PRTFsection">
        <TrackVisibility once>
          <SectionHeader headerDetails={this.state.headerDetails} />
        </TrackVisibility>

        <TrackVisibility once>
          <AboutSummary />
        </TrackVisibility>

        <TrackVisibility once>
          <AboutDetails />
        </TrackVisibility>
        
      </section>
    )
  }
}
export default AboutMe;