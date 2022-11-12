import { Component } from "react";

class SectionHeader extends Component{
  render(){
    const {headerDetails} = this.props;
    const {isVisible} = this.props;

    return (
      <div className="PRTFheader" id={headerDetails.id}>
        <div className={isVisible ? "boxes active" : "boxes"}>
          <div className="box left"></div>
          <div className="box middle"></div>
          <div className="box right"></div>
        </div>
        <span>{headerDetails.subtitle}</span>
        <p>{headerDetails.title}</p>
      </div>
    )
  }
}
export default SectionHeader;