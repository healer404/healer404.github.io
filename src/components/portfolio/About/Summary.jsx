import { Component } from 'react';
import SummaryItem from './SummaryItem';

class AboutSummary extends Component{
  render(){
    const {isVisible} = this.props;
    const data = [
      {
        icon: 'fas fa-balance-scale',
        label: 'balanced',
        description: 'The balance between quality and performance is my highest priority.'
      },
      {
        icon: 'fas fa-laptop-code',
        label: 'Clean Code',
        description: 'Neat coding is one of my hobbies in programming.'
      },
      {
        icon: 'fas fa-user-check',
        label: 'user-friendly',
        description: 'Passionate about building projects that are easy to use by everyone.'
      },
      {
        icon: 'fas fa-calendar-check',
        label: 'Reliable',
        description: 'Putting all efforts into producing good quality work on time.'
      }
    ];
    console.log(data)
    return(
      <article className={isVisible ? "aboutSummary active" : "aboutSummary"}>
        {data.map((summaryItemDetails, index) => (

          <SummaryItem aboutSummaryItem={summaryItemDetails} key={index} />
        ))}
      </article>
    )
  }
}
export default AboutSummary;