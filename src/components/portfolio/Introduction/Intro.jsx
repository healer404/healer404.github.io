import { Component } from "react";
import TrackVisibility from "react-on-screen";
import IntroContent from "./IntroContent";
class Intro extends Component{
  constructor(props){
    super(props);
    this.state = {
      intro: {
        id: 'introduction',
        greeting: 'Hello, my name is',
        name: 'Roniel Duka',
        position: 'Junior Developer',
        cvlink: ''
      }
    }
  }
  render(){
    return (
      <TrackVisibility once tag="section" className="PRTFsection" id="introduction">
        <IntroContent introData={this.state.intro} /> 
      </TrackVisibility> 
    )
  }
}
export default Intro;