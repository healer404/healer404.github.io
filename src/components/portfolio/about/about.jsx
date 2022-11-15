import { useRef } from "react";
import Observer from "../../../hooks/observer";
import SectionHeader from "../misc/header";
import SummaryItem from "./summaryItems";
import Description from "./description";
import SkillItem from "./skills";

import './about.css';

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
  const skillDetails = [
    {
      type: 2,
      icon: 'fab fa-html5',
      label: 'html'
    },
    {
      type: 2,
      icon: 'fab fa-css3',
      label: 'css' 
    },
    {
      type: 2,
      icon: 'fab fa-php',
      label: 'php'
    },
    {
      type: 2,
      icon: 'fas fa-database',
      label: 'mysql'
    },
    {
      type: 1,
      icon: 'fab fa-laravel',
      label: 'laravel'
    },
    {
      type: 1,
      icon: 'fab fa-js',
      label: 'js'
    },
    {
      type: 1,
      icon: 'fab fa-envira icon-rotate',
      label: 'mongodb'
    },
    {
      type: 1,
      icon: 'fab fa-react',
      label: 'react'
    },
    {
      type: 1,
      icon: 'fab fa-node',
      label: 'node'
    },
    {
      type: 2,
      icon: 'fab fa-git',
      label: 'git'
    },
    {
      type: 1,
      icon: 'fab fa-java',
      label: 'java'
    },
    {
      type: 1,
      icon: 'fas fa-pencil-ruler',
      label: 'ui design'
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
      <main className="aboutDescriptionContent" ref={refAboutDesc}>
        <Description isInView={Observer(refAboutDesc)} />

        <ul className={Observer(refAboutDesc) ? "aboutSkills active" : "aboutSkills"}>
          {skillDetails.map((skillItem, index) => (
            <SkillItem itemInfo={skillItem} key={index} />
          ))};
        </ul>
      </main>
    </section>
  )
}
export default AboutMe;