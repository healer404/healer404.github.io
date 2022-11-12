import { Component } from "react";

import SectionHeader from "../../page/portfolio/inc.header";

class AboutMe extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const aboutVisible = this.props.isVisible;
    const data = {
      id: 'about',
      title: 'About Me',
      subtitle: 'Let me tell you something'
    }

    return (
      <>
        <SectionHeader headerDetails={data} isAboutInView={aboutVisible} />
        <section className="PRTFsection">

        <article className={aboutVisible ? "aboutSummary active" : "aboutSummary"}>
          
        </article>
      </section>
      </>
    )
  }
}
export default AboutMe;