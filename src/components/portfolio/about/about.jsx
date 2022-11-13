import { useRef } from "react";
import Observer from "../../../hooks/observer";
import SectionHeader from "../misc/header";
import SummaryItem from "./summaryItems";

const AboutMe = () => {
  const refAboutMe = useRef(null);
  const refAboutDesc = useRef(null);

  const headerDetails = {
    title: "About Me", 
    subtitle: "Let me tell you something", 
    ref: Observer(refAboutMe),
    id: "about"
  };
  const summaryDetails = [
    { 
      icon: 'fas fa-balance-scale',
      label: 'balanced',
      details: 'The balance between quality and performance is my highest priority.'
    },
    { 
      icon: 'fas fa-laptop-code',
      label: 'Clean Code',
      details: 'Neat coding is one of my hobbies in programming.'
    },
    { 
      icon: 'fas fa-user-check',
      label: 'user-friendly',
      details: 'Passionate about building projects that are easy to use by everyone.'
    },
    { 
      icon: 'fas fa-calendar-check',
      label: 'Reliable',
      details: 'Putting all efforts into producing good quality work on time.'
    }
  ];
  return (    
    <section className="PRTFsection" ref={refAboutMe}>
      <SectionHeader header={headerDetails} />

      <article className={Observer(refAboutMe) ? "aboutSummary active" : "aboutSummary"}>
        {summaryDetails.map((summaryItem, index) => (
          <SummaryItem items={summaryItem} key={index} />
        ))}
      </article>
      <main className="aboutDescriptionContent">
        <article className={Observer(refAboutDesc) ? "aboutDescription active" : "aboutDescription"} ref={refAboutDesc}>
          <picture>
            <img src="https://avatars.githubusercontent.com/u/47404070?v=4" alt="Roniel Duka Photo" loading="lazy"/>
          </picture>
          <div className="description">
            <span>Who am I?</span>
            <p>I am a graduate of computer engineering that loves exploring and 
              learning new things, especially when it comes to programming. I 
              am passionate about creating websites and web applications with 
              dynamic user interfaces.</p>
            <ul>
              <li>
                <a href=""><i className="fab fa-facebook fa-lg"></i></a>
              </li>
              <li>
                <a href=""><i className="fab fa-twitter fa-lg"></i></a>
              </li>
              <li>
                <a href=""><i className="fab fa-linkedin fa-lg"></i></a>
              </li>
            </ul>   
          </div>
        </article>

        {/* <ul className={RefObserver(refAboutDesc) ? "aboutSkills active" : "aboutSkills"}>
          <li className="two">
            <span>Intermediate</span>
            <i className="fab fa-html5 fa-lg"></i>
            <p>HTML</p>
          </li>
          <li className="two">
            <span>Intermediate</span>
            <i className="fab fa-css3 fa-lg"></i>
            <p>css</p>
          </li>
          <li className="two">
            <span>Intermediate</span>
            <i className="fab fa-php fa-lg"></i>
            <p>PHP</p>
          </li>
          <li className="two">
            <span>Intermediate</span>
            <i className="fas fa-database fa-lg"></i>
            <p>Mysql</p>
          </li>
          <li className="one">
            <span>Entry</span>
            <i className="fab fa-laravel fa-lg"></i>
            <p>Laravel</p>
          </li>
          <li className="two">
            <span>Intermediate</span>
            <i className="fab fa-js fa-lg"></i>
            <p>JS</p>
          </li>
          <li className="one">
            <span>Entry</span>
            <i className="fab fa-envira fa-lg icon-rotate"></i>
            <p>Mongodb</p>
          </li>
          <li className="one">
            <span>Entry</span>
            <i className="fab fa-react fa-lg"></i>
            <p>React</p>
          </li>
          <li className="one">
            <span>Entry</span>
            <i className="fab fa-node fa-lg "></i>
            <p>Node</p>
          </li>
          <li className="two">
            <span>Intermediate</span>
            <i className="fab fa-git fa-lg"></i>
            <p>git</p>
          </li>
          <li className="one">
            <span>entry</span>
            <i className="fab fa-java fa-lg"></i>
            <p>java</p>
          </li>
          <li className="one">
            <span>entry</span>
            <i className="fas fa-pencil-ruler fa-lg"></i>
            <p>UI design</p>
          </li>
        </ul> */}
      </main>
    </section>
  )
}
export default AboutMe;