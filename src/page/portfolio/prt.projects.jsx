import { useRef } from "react";
import RefObserver from "./inc.observer";
import SectionHeader from "./inc.header";

const projectItem = ({
  backgroundImg,
  isBgWhole,
  title,
  description,
}) => {
  return (
    <article className="card">
      <div className="card-wrapper">
        <div 
          className={isBgWhole ? "top whole" : "top"}
          style={{backgroundImage: backgroundImg}}
        ></div>
        <div className="bottom">
          <span>{title}</span>
          <p>{description}</p>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  const refProjects = useRef(null);
  return (
    <section className="PRTFsection" ref={refProjects}>
      {SectionHeader({
        title: "Projects", 
        subtitle: "Here are some of my", 
        ref: RefObserver(refProjects),
        id: "projects"
      })}

      <main className={RefObserver(refProjects) ? "projectContainer active" : "projectContainer"}>
        <div className="projectCards">
          {projectItem({
            backgroundImg: "url('./assets/portfolio/cuisinea.png')",
            isBgWhole: false,
            title: "Cuisinea - the ultimate food library",
            description: "The prupose of this project is to provide a specific application for people to browse or share any food related information. A stepping stone in order to develop the Filipino cuisine."
          })}

          {projectItem({
            backgroundImg: "url('./assets/portfolio/ereport.png')",
            isBgWhole: false,
            title: "EREPORT - Online Barangay reporting system",
            description: "This project made it easier for its user to report cases and even request for documents in their local authorities. It made it also easier for the authorities to monitor and managed their citizens."
          })}

          {projectItem({
            backgroundImg: "url('./assets/portfolio/project-inventab.png')",
            isBgWhole: true,
            title: "Inventab - Inventory Management System",
            description: "This is a simple inventory management system for a school project that utlize the basic CRUD of PHP and MySQL."
          })}

          {projectItem({
            backgroundImg: "url('./assets/portfolio/project-dapo.png')",
            isBgWhole: false,
            title: "Project: DAPO",
            description: "Project: DAPO or Data Analytics on Pathological Outbreaks was similar to a contact tracing applications but it was focused on dengue outbreak. This was developed using PHP, MySQL, JavaScript, and Cordova."
          })}

          {projectItem({
            backgroundImg: "url('./assets/portfolio/cipherama.png')",
            isBgWhole: false,
            title: "Cipherama",
            description: "It's a turned-based strategy multiplayer game where the two teams will race in decrypting the traps and base of their enemy team. This game was developed using PHP, MySQL, and JavaScript."
          })}

          {projectItem({
            backgroundImg: "url('./assets/portfolio/project-coding-challenge.png')",
            isBgWhole: false,
            title: "Coding Challenge",
            description: "A number of teams competed in a coding challenge with the aim of winning by accumulating the most points."
          })}
        </div>
      </main>
    </section> 
  )
}
export default Projects;