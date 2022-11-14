const SkillItem = (props) => {
  const type = props.itemInfo.type;
  const icon = props.itemInfo.icon;
  const label = props.itemInfo.label;

  let typeClass;
  let typeText;
  if(type == 1){
    typeClass = 'one';
    typeText = 'Entry';
  } else {
    typeClass = 'two';
    typeText = 'Intermediate';
  }

  return(
    <li className={typeClass}>
      <span>{typeText}</span>
      <i className={`${icon} fa-lg`}></i>
      <p>{label}</p>
    </li>
  )
}
export default SkillItem;