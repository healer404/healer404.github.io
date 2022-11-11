import { Component } from "react";
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
        <Intro introData={this.state.intro} />
        <Navbar />
      </>
    )
  }
}
export default PortfolioPage;