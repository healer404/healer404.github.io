import { Component } from "react";
import TrackVisibility from "react-on-screen";

import SectionHeader from "../Header";
import ProjectList from "./ProjectList";

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {
      headerDetails: {
        id: 'projects',
        title: 'Projects',
        subtitle: 'Here are some of my'
      }
    }
  }
  render(){
    const {isVisible} = this.props;
    return(
      <section className="PRTFsection">
        <TrackVisibility once>
          <SectionHeader headerDetails={this.state.headerDetails} />
        </TrackVisibility>

        <TrackVisibility once>
          <ProjectList />
        </TrackVisibility>
      </section>
    )
  }
}
export default Projects;