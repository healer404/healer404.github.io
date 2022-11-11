import { Component } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

class Intro extends Component{
  state = {
    visibility: false,
  }
  render(){
    const {introData} = this.props;
    return (
      <ReactVisibilitySensor onChange={(isVisible) => {
        this.setState({visibility: isVisible})
      }}>
        <section className="PRTFsection" id={introData.id}>
          <main className={this.state.visibility ? "introContainer active" : "introContainer"}>
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
        </section>
      </ReactVisibilitySensor>
    )
  }
}
export default Intro;