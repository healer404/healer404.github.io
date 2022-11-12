import { Component } from 'react';

class SummaryItem extends Component{
  render(){
    const {aboutSummaryItem} = this.props;
    return(
      <div className='item'>
        <div className="icon">
          <i className={aboutSummaryItem.icon + " fa-lg"}></i>
        </div>
        <span>{aboutSummaryItem.label}</span>
        <p>{aboutSummaryItem.description}</p>
      </div>
    )
  }
}
export default SummaryItem;