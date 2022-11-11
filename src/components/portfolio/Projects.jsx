import { Component } from "react";
import ProjectItem from "./ProjectItem";

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {
      item1: {
        isBgWhole: false,
        backgroundImg: "url('./assets/portfolio/cuisinea.png",
        title: "Cuisinea - the ultimate food library",
        description: "The prupose of this project is to provide a specific application for people to browse or share any food related information. A stepping stone in order to develop the Filipino cuisine."
      },
      item2: {
        isBgWhole: false,
        backgroundImg: "url('./assets/portfolio/ereport.png')",
        title: "EREPORT - Online Barangay reporting system",
        description: "This project made it easier for its user to report cases and even request for documents in their local authorities. It made it also easier for the authorities to monitor and managed their citizens."
      },
      item3: {
        isBgWhole: true,
        backgroundImg: "url('./assets/portfolio/project-inventab.png')",
        title: "Inventab - Inventory Management System",
        description: "This is a simple inventory management system for a school project that utlize the basic CRUD of PHP and MySQL."
      },
      item4: {
        isBgWhole: false,
        backgroundImg: "url('./assets/portfolio/project-dapo.png')",
        title: "Project: DAPO",
        description: "Project: DAPO or Data Analytics on Pathological Outbreaks was similar to a contact tracing applications but it was focused on dengue outbreak. This was developed using PHP, MySQL, JavaScript, and Cordova."
      },
      item5: {
        isBgWhole: false,
        backgroundImg: "url('./assets/portfolio/cipherama.png')",
        title: "Cipherama",
        description: "It's a turned-based strategy multiplayer game where the two teams will race in decrypting the traps and base of their enemy team. This game was developed using PHP, MySQL, and JavaScript."
      },
      item6: {
        isBgWhole: false,
        backgroundImg: "url('./assets/portfolio/project-coding-challenge.png')",
        title: "Coding Challenge",
        description: "A number of teams competed in a coding challenge with the aim of winning by accumulating the most points."
      }
    }
  }
  render(){
    const {projectsVisible} = this.props;
    return(
      <section className="PRTFsection">
        <main className={projectsVisible ? "projectContainer active" : "projectContainer"}>
          <div className="projectCards">
            <ProjectItem itemDetails={this.state.item1} />
            <ProjectItem itemDetails={this.state.item2} />
            <ProjectItem itemDetails={this.state.item3} />
            <ProjectItem itemDetails={this.state.item4} />
            <ProjectItem itemDetails={this.state.item5} />
            <ProjectItem itemDetails={this.state.item6} /> 
          </div>
        </main> 
      </section>
    )
  }
}
export default Projects;