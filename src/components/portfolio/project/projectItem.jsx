const ProjectItem = (props) => {
  const backgroundImg = props.itemDetails.backgroundImg;
  const isBgWhole = props.itemDetails.isBgWhole;
  const title = props.itemDetails.title;
  const description = props.itemDetails.description;
  return (
    <article className="card">
      <div className="card-wrapper">
        <div 
          className={`top ${isBgWhole ? " whole" : ""}`}
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
export default ProjectItem;