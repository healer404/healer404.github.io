import { Component } from "react";
import ProjectItem from "./ProjectItem";

class ProjectList extends Component{
  render(){
    const {isVisible} = this.props;
    const data = [
      {
        isBgWhole: false,
        backgroundImg: "url('./assets/portfolio/cuisinea.png",
        title: "Cuisinea - the ultimate food library",
        description: "The prupose of this project is to provide a specific application for people to browse or share any food related information. A stepping stone in order to develop the Filipino cuisine."
      },
      {
        isBgWhole: false,
        backgroundImg: "url('./assets/portfolio/ereport.png')",
        title: "EREPORT - Online Barangay reporting system",
        description: "This project made it easier for its user to report cases and even request for documents in their local authorities. It made it also easier for the authorities to monitor and managed their citizens."
      },
      {
        isBgWhole: true,
        backgroundImg: "url('./assets/portfolio/project-inventab.png')",
        title: "Inventab - Inventory Management System",
        description: "This is a simple inventory management system for a school project that utlize the basic CRUD of PHP and MySQL."
      },
      {
        isBgWhole: false,
        backgroundImg: "url('./assets/portfolio/project-dapo.png')",
        title: "Project: DAPO",
        description: "Project: DAPO or Data Analytics on Pathological Outbreaks was similar to a contact tracing applications but it was focused on dengue outbreak. This was developed using PHP, MySQL, JavaScript, and Cordova."
      },
      {
        isBgWhole: false,
        backgroundImg: "url('./assets/portfolio/cipherama.png')",
        title: "Cipherama",
        description: "It's a turned-based strategy multiplayer game where the two teams will race in decrypting the traps and base of their enemy team. This game was developed using PHP, MySQL, and JavaScript."
      },
      {
        isBgWhole: false,
        backgroundImg: "url('./assets/portfolio/project-coding-challenge.png')",
        title: "Coding Challenge",
        description: "A number of teams competed in a coding challenge with the aim of winning by accumulating the most points."
      }
    ];
    return(
      <main className={isVisible ? "projectContainer active" : "projectContainer"}>
        <div className="projectCards">
          {data.map((projectItem, index) => (
            <ProjectItem itemDetails={projectItem} key={index} />
          ))}
        </div>
      </main>
    )
  }
}
export default ProjectList;