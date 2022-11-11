import { Component } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

class Intro extends Component{
  state = {
    visibility: false,
  }
  render(){
    return (
      <ReactVisibilitySensor onChange={(isVisible) => {
        this.setState({visibility: isVisible})
      }}>
        <section className="PRTFsection" id="introduction">
          <main className={this.state.visibility ? "introContainer active" : "introContainer"}>
            <div className="texts">
              <span className="greeting">
                Hello, my name is
              </span>
              <h1 className="name">
                Roniel Duka
              </h1>
              <span className="position">Junior developer</span>
            </div>
            <div className="buttons">
              <a href="" className="btn-primary" target="_blank" rel="noreferrer">
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