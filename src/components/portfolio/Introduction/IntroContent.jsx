import { Component } from "react";

class IntroContent extends Component{
  render(){
    const {introData} = this.props;
    const {isVisible} = this.props;
    return(
      <main className={isVisible ? "introContainer active" : "introContainer"}>
        <div className="texts">
          <span className="greeting">
            {introData.greeting}
          </span>
          <h1 className="name">
          {introData.name}
          </h1>
          <span className="position">{introData.position}</span>
        </div>
        <div className="buttons">
          <a href={introData.cvlink} className="btn-primary" target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a href="" className="btn-secondary" target="_blank" rel="noreferrer">
            Let's Talk
          </a>
        </div>
      </main>
    )
  }
}
export default IntroContent;