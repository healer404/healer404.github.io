import { Component } from "react";
import SkillIcon from './SkillIcon';

class AboutDetails extends Component{
  render(){
    const {isVisible} = this.props;
    const skills = [
      { 
        type: 2,
        icon: 'fab fa-html5',
        label: 'HTML'
      }, 
      {
        type: 2,
        icon: 'fab fa-css3',
        label: 'CSS'
      },
      {
        type: 2,
        icon: 'fab fa-php',
        label: 'PHP'
      },
      {
        type: 2,
        icon: 'fas fa-database',
        label: 'Mysql'
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
        label: 'UI design'
      }      
    ];
    return(
      <main className="aboutDescriptionContent">
        <article className={isVisible ? "aboutDescription active" : "aboutDescription"}>
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

        <ul className="aboutSkills active">
          {skills.map((skillItem, index) => (
            <SkillIcon skillItem={skillItem} key={index} />
          ))}
        </ul>        
      </main>
    )
  }
}
export default AboutDetails;