const SummaryItem = (props) => {
  return (
    <div className="item">
      <div className="icon">
        <i className={`${props.icon}" fa-lg"`}></i>
      </div>
      <span>{props.label}</span>
      <p>{props.details}</p>
    </div>
  )
}
export default SummaryItem;