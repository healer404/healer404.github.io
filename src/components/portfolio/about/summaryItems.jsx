const SummaryItem = (props) => {
  const icon = props.items.icon;
  const label = props.items.label;
  const details = props.items.details;

  return (
    <div className="item">
      <div className="icon">
        <i className={`${icon} fa-lg"`}></i>
      </div>
      <span>{label}</span>
      <p>{details}</p>
    </div>
  )
}
export default SummaryItem;