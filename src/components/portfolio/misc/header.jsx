import './header.css';
const SectionHeader = (props) => {
  const title = props.header.title;
  const subtitle = props.header.subtitle;
  const ref = props.header.ref;
  const id = props.header.id;
  return (
    <div className="PRTFheader" id={id}>
      <div className={ref ? "boxes active" : "boxes"}>
        <div className="box left"></div>
        <div className="box middle"></div>
        <div className="box right"></div>
      </div>
      <span>{subtitle}</span>
      <p>{title}</p>
    </div>
  )
}
export default SectionHeader;