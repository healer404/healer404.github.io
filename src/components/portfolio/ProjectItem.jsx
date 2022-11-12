import { Component } from "react";

class ProjectItem extends Component{
  render(){
    const {itemDetails} = this.props;
    return (
      <article className="card">
        <div className="card-wrapper">
          <div 
            className={itemDetails.isBgWhole ? "top whole" : "top"}
            style={{backgroundImage: itemDetails.backgroundImg}}
          ></div>
          <div className="bottom">
            <span>{itemDetails.title}</span>
            <p>{itemDetails.description}</p>
          </div>
        </div>
      </article>
    )
  }
}
export default ProjectItem;