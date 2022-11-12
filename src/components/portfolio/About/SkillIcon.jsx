import { Component } from 'react';

class SkillIcon extends Component{
  render(){
    const {skillItem} = this.props;

    const skillClass = (skillType) => {
      if(skillType === 1){
        return 'one';
      } else {
        return 'two';
      }
    }

    const skillLabel = (skillType) => {
      if(skillType === 1){
        return 'Entry';
      } else {
        return 'Intermediate';
      }
    }
    return (
      <li className={skillClass(skillItem.type)}>
        <span>{skillLabel(skillItem.type)}</span>
        <i className={skillItem.icon + " fa-lg"}></i>
        <p>{skillItem.label}</p>
      </li>
    )
  }
}
export default SkillIcon;